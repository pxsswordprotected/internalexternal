import { getCombinedEssayPlainText } from "@/lib/content";

export const dynamic = "force-dynamic";

const responseHeaders = {
  "Cache-Control": "no-store",
  "Content-Type": "text/plain; charset=utf-8",
};

export async function GET() {
  try {
    const essayText = await getCombinedEssayPlainText();

    if (!essayText) {
      return new Response("No essay sections found.", {
        status: 404,
        headers: responseHeaders,
      });
    }

    return new Response(essayText, {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Unable to build essay text.", error);

    return new Response("Unable to build essay text.", {
      status: 500,
      headers: responseHeaders,
    });
  }
}
