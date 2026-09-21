import { revalidatePath } from "next/cache";
import {
  EditableDocumentConflictError,
  EditableDocumentNotFoundError,
  type EditableDocumentRef,
  InvalidEditableDocumentError,
  InvalidMarkdocError,
  readEditableDocument,
  saveEditableDocument,
} from "@/lib/editable-content";

export const dynamic = "force-dynamic";

const responseHeaders = {
  "Cache-Control": "no-store",
};

function json(body: unknown, status: number) {
  return Response.json(body, { status, headers: responseHeaders });
}

function localOnlyResponse() {
  return json(
    { error: "Inline editing is available only in local development." },
    403,
  );
}

function parseSearchRef(request: Request): EditableDocumentRef {
  const { searchParams } = new URL(request.url);
  const kind = searchParams.get("kind");

  if (kind === "introduction" && !searchParams.has("slug")) {
    return { kind };
  }

  if (kind === "section") {
    const slug = searchParams.get("slug");
    if (slug) {
      return { kind, slug };
    }
  }

  throw new InvalidEditableDocumentError("Invalid document reference.");
}

function parsePutBody(value: unknown): {
  ref: EditableDocumentRef;
  markdown: string;
  revision: string;
} {
  if (!value || typeof value !== "object") {
    throw new InvalidEditableDocumentError("Invalid request body.");
  }

  const body = value as Record<string, unknown>;
  if (
    typeof body.markdown !== "string" ||
    typeof body.revision !== "string" ||
    !/^[a-f0-9]{64}$/.test(body.revision)
  ) {
    throw new InvalidEditableDocumentError("Invalid request body.");
  }

  if (body.kind === "introduction" && body.slug === undefined) {
    return {
      ref: { kind: "introduction" },
      markdown: body.markdown,
      revision: body.revision,
    };
  }

  if (body.kind === "section" && typeof body.slug === "string") {
    return {
      ref: { kind: "section", slug: body.slug },
      markdown: body.markdown,
      revision: body.revision,
    };
  }

  throw new InvalidEditableDocumentError("Invalid document reference.");
}

function knownErrorResponse(error: unknown): Response | null {
  if (error instanceof InvalidEditableDocumentError) {
    return json({ error: error.message }, 400);
  }
  if (error instanceof EditableDocumentNotFoundError) {
    return json({ error: error.message }, 404);
  }
  if (error instanceof InvalidMarkdocError) {
    return json({ error: error.message, details: error.details }, 422);
  }
  if (error instanceof EditableDocumentConflictError) {
    return json(
      {
        error: error.message,
        revision: error.latest.revision,
        markdown: error.latest.markdown,
      },
      409,
    );
  }
  return null;
}

export async function GET(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return localOnlyResponse();
  }

  try {
    return json(await readEditableDocument(parseSearchRef(request)), 200);
  } catch (error) {
    const response = knownErrorResponse(error);
    if (response) return response;

    console.error("Unable to read editable document.", error);
    return json({ error: "Unable to read document." }, 500);
  }
}

export async function PUT(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return localOnlyResponse();
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      throw new InvalidEditableDocumentError("Invalid JSON body.");
    }

    const { ref, markdown, revision } = parsePutBody(body);
    const saved = await saveEditableDocument(ref, markdown, revision);

    revalidatePath("/");
    if (ref.kind === "section") {
      revalidatePath(`/sections/${ref.slug}`);
    }

    return json({ revision: saved.revision }, 200);
  } catch (error) {
    const response = knownErrorResponse(error);
    if (response) return response;

    console.error("Unable to save editable document.", error);
    return json({ error: "Unable to save document." }, 500);
  }
}
