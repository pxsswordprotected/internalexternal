import Markdoc, { type Node } from "@markdoc/markdoc";
import React from "react";
import { GlossaryTerm } from "@/components/glossary";
import { applyGlossary } from "@/lib/glossary-markdoc";
import { getMarkdocValidationMessages } from "@/lib/markdoc";

interface MarkdocContentProps {
  content: () => Promise<{ node: Node }>;
  glossarySection?: string;
}

export async function MarkdocContent({ content, glossarySection }: MarkdocContentProps) {
  const { node } = await content();
  const errors = getMarkdocValidationMessages(node);

  if (errors.length > 0) {
    throw new Error(
      `Invalid essay content: ${errors.join(", ")}`,
    );
  }

  const renderable = Markdoc.transform(node);
  const tree =
    glossarySection === undefined ? renderable : applyGlossary(renderable, glossarySection);

  return (
    <div className="prose">
      {Markdoc.renderers.react(tree, React, { components: { GlossaryTerm } })}
    </div>
  );
}
