import Markdoc, { type Node } from "@markdoc/markdoc";

export function getMarkdocValidationMessages(node: Node): string[] {
  return Markdoc.validate(node).map(({ error, lines }) => {
    const lineLabel = lines.length > 0 ? `Line ${lines.join("–")}: ` : "";
    return `${lineLabel}${error.message}`;
  });
}

export function validateMarkdocMarkdown(markdown: string): string[] {
  try {
    return getMarkdocValidationMessages(Markdoc.parse(markdown));
  } catch (error) {
    return [error instanceof Error ? error.message : "Unable to parse Markdown."];
  }
}
