import type { Node } from "@markdoc/markdoc";

function serializeChildren(node: Node): string {
  return node.children.map(serializeNode).join("");
}

function serializeTableRow(node: Node): string {
  return node.children
    .filter((child) => child.type === "td" || child.type === "th")
    .map((child) => serializeChildren(child).trim())
    .join("\t");
}

function serializeTableRows(node: Node): string {
  const rows = node.type === "tr" ? [node] : node.children;

  return rows
    .flatMap((child) =>
      child.type === "tr"
        ? [serializeTableRow(child)]
        : child.children
            .filter((row) => row.type === "tr")
            .map(serializeTableRow),
    )
    .join("\n");
}

function serializeNode(node: Node): string {
  switch (node.type) {
    case "text":
      return typeof node.attributes.content === "string"
        ? node.attributes.content
        : "";
    case "softbreak":
    case "hardbreak":
      return "\n";
    case "paragraph":
    case "heading":
    case "blockquote":
      return `${serializeChildren(node)}\n\n`;
    case "fence":
      return `${
        typeof node.attributes.content === "string"
          ? node.attributes.content
          : ""
      }\n\n`;
    case "code":
      return node.children.length > 0
        ? serializeChildren(node)
        : typeof node.attributes.content === "string"
          ? node.attributes.content
          : "";
    case "em":
    case "s":
    case "strong":
    case "link":
    case "inline":
      return serializeChildren(node);
    case "list": {
      const ordered = node.attributes.ordered === true;
      const items = node.children.map((item, index) => {
        const marker = ordered ? `${index + 1}. ` : "• ";
        return `${marker}${serializeChildren(item).trim()}\n`;
      });

      return `${items.join("")}\n`;
    }
    case "table":
      return `${serializeTableRows(node)}\n\n`;
    case "thead":
    case "tbody":
      return serializeTableRows(node);
    case "tr":
      return serializeTableRow(node);
    case "td":
    case "th":
      return serializeChildren(node).trim();
    case "hr":
      return "\n\n";
    case "comment":
      return "";
    case "image":
      return typeof node.attributes.alt === "string" ? node.attributes.alt : "";
    case "tag": {
      if (node.tag === "Diagram") {
        const caption = node.attributes.caption;
        const description = node.attributes.description;
        const visibleText =
          typeof caption === "string" && caption.length > 0
            ? caption
            : typeof description === "string"
              ? description
              : "";

        return visibleText.length > 0 ? `${visibleText}\n\n` : "";
      }

      return serializeChildren(node);
    }
    default:
      return serializeChildren(node);
  }
}

export function markdocToPlainText(node: Node): string {
  const invalidNode = [node, ...node.walk()].find(
    (current) => current.errors.length > 0,
  );

  if (invalidNode) {
    throw new Error("Cannot serialize Markdoc content with parser errors.");
  }

  return serializeNode(node)
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
