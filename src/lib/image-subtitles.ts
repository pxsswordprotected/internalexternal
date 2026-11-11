import Markdoc, { type RenderableTreeNode } from "@markdoc/markdoc";

export const IMAGE_SUBTITLE_CLASS = "image-subtitle";

function hasOnlyChild(node: RenderableTreeNode, childName: string): boolean {
  return (
    Markdoc.Tag.isTag(node) &&
    node.name === "p" &&
    node.children.length === 1 &&
    Markdoc.Tag.isTag(node.children[0]) &&
    node.children[0].name === childName
  );
}

/**
 * A subtitle is a paragraph made up entirely of italic text that comes straight after a paragraph
 * holding only an image (`![](...)` then `*Subtitle*` in the markdown). Marking it with a class lets
 * CSS style it without catching ordinary paragraphs that merely contain some italics.
 */
export function markImageSubtitles(node: RenderableTreeNode): RenderableTreeNode {
  if (!Markdoc.Tag.isTag(node)) return node;

  const children = node.children.map((child, index) => {
    const marked = markImageSubtitles(child);
    if (index > 0 && hasOnlyChild(node.children[index - 1], "img") && hasOnlyChild(marked, "em")) {
      const paragraph = marked as InstanceType<typeof Markdoc.Tag>;
      return new Markdoc.Tag(
        paragraph.name,
        { ...paragraph.attributes, class: IMAGE_SUBTITLE_CLASS },
        paragraph.children,
      );
    }
    return marked;
  });

  return new Markdoc.Tag(node.name, node.attributes, children);
}
