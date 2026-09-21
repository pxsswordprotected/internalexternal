import { createHash, randomUUID } from "node:crypto";
import { rename, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { validateMarkdocMarkdown } from "@/lib/markdoc";

export type EditableDocumentRef =
  | { kind: "introduction" }
  | { kind: "section"; slug: string };

export interface EditableDocument {
  markdown: string;
  revision: string;
}

export class InvalidEditableDocumentError extends Error {}
export class EditableDocumentNotFoundError extends Error {}

export class InvalidMarkdocError extends Error {
  constructor(readonly details: string[]) {
    super("Invalid Markdoc.");
  }
}

export class EditableDocumentConflictError extends Error {
  constructor(readonly latest: EditableDocument) {
    super("Document changed since editing began.");
  }
}

const sectionSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const frontmatterPattern = /^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/;

function resolveEditableDocument(ref: EditableDocumentRef): string {
  if (ref.kind === "introduction") {
    return path.join(process.cwd(), "src/content/introduction.md");
  }

  if (!sectionSlugPattern.test(ref.slug)) {
    throw new InvalidEditableDocumentError("Invalid section slug.");
  }

  return path.join(process.cwd(), "src/content/sections", `${ref.slug}.md`);
}

function digest(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

function splitDocument(bytes: Buffer): {
  frontmatter: string;
  markdown: string;
} {
  const source = bytes.toString("utf8");
  const match = source.match(frontmatterPattern);

  if (!match) {
    throw new InvalidEditableDocumentError(
      "Editable document is missing valid frontmatter.",
    );
  }

  return {
    frontmatter: match[0],
    markdown: source.slice(match[0].length),
  };
}

async function readDocumentBytes(filePath: string): Promise<Buffer> {
  try {
    return await readFile(filePath);
  } catch (error) {
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new EditableDocumentNotFoundError("Editable document not found.");
    }
    throw error;
  }
}

export async function readEditableDocument(
  ref: EditableDocumentRef,
): Promise<EditableDocument> {
  const bytes = await readDocumentBytes(resolveEditableDocument(ref));
  const { markdown } = splitDocument(bytes);

  return { markdown, revision: digest(bytes) };
}

export async function saveEditableDocument(
  ref: EditableDocumentRef,
  markdown: string,
  revision: string,
): Promise<EditableDocument> {
  const filePath = resolveEditableDocument(ref);
  const currentBytes = await readDocumentBytes(filePath);
  const currentRevision = digest(currentBytes);
  const { frontmatter, markdown: currentMarkdown } = splitDocument(currentBytes);

  if (currentRevision !== revision) {
    throw new EditableDocumentConflictError({
      markdown: currentMarkdown,
      revision: currentRevision,
    });
  }

  const validationMessages = validateMarkdocMarkdown(markdown);
  if (validationMessages.length > 0) {
    throw new InvalidMarkdocError(validationMessages);
  }

  const lfMarkdown = markdown.replace(/\r\n?/g, "\n");
  const normalizedMarkdown =
    lfMarkdown.length === 0 ? "" : `${lfMarkdown.replace(/\n+$/g, "")}\n`;
  const nextBytes = Buffer.from(frontmatter + normalizedMarkdown, "utf8");
  const temporaryPath = path.join(
    path.dirname(filePath),
    `.${path.basename(filePath)}.${process.pid}.${randomUUID()}.tmp`,
  );

  try {
    await writeFile(temporaryPath, nextBytes, { flag: "wx" });
    await rename(temporaryPath, filePath);
  } catch (error) {
    await unlink(temporaryPath).catch(() => undefined);
    throw error;
  }

  return { markdown: normalizedMarkdown, revision: digest(nextBytes) };
}
