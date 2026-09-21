import Markdoc, { type Node } from "@markdoc/markdoc";
import React from "react";
import { getMarkdocValidationMessages } from "@/lib/markdoc";

interface MarkdocContentProps {
  content: () => Promise<{ node: Node }>;
}

export async function MarkdocContent({ content }: MarkdocContentProps) {
  const { node } = await content();
  const errors = getMarkdocValidationMessages(node);

  if (errors.length > 0) {
    throw new Error(
      `Invalid essay content: ${errors.join(", ")}`,
    );
  }

  const renderable = Markdoc.transform(node);

  return (
    <div className="prose">
      {Markdoc.renderers.react(renderable, React)}
    </div>
  );
}
