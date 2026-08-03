import Markdoc, { type Config, type Node } from "@markdoc/markdoc";
import React from "react";

interface DiagramProps {
  name?: string;
  caption?: string;
  description?: string;
  layout?: "column" | "wide" | "full";
}

function Diagram({
  name = "[PLACEHOLDER: Name this diagram]",
  caption,
  description,
  layout = "wide",
}: DiagramProps) {
  return (
    <figure className={`diagram diagram--${layout}`}>
      <div className="diagram__placeholder" role="img" aria-label={description}>
        [PLACEHOLDER: Implement diagram “{name}”]
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

const markdocConfig: Config = {
  tags: {
    Diagram: {
      render: "Diagram",
      selfClosing: true,
      attributes: {
        name: { type: String },
        caption: { type: String },
        description: { type: String },
        layout: {
          type: String,
          matches: ["column", "wide", "full"],
          default: "wide",
        },
      },
    },
  },
};

interface MarkdocContentProps {
  content: () => Promise<{ node: Node }>;
}

export async function MarkdocContent({ content }: MarkdocContentProps) {
  const { node } = await content();
  const errors = Markdoc.validate(node, markdocConfig);

  if (errors.length > 0) {
    throw new Error(
      `Invalid essay content: ${errors.map((error) => error.error.message).join(", ")}`,
    );
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <div className="prose">
      {Markdoc.renderers.react(renderable, React, {
        components: { Diagram },
      })}
    </div>
  );
}
