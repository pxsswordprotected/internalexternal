"use client";

import { activeEditor$, ButtonWithTooltip, useCellValue } from "@mdxeditor/editor";
import {
  $createParagraphNode,
  $createTextNode,
  $getSelection,
  $isDecoratorNode,
  $isElementNode,
  $isNodeSelection,
  $isRangeSelection,
  type ElementNode,
  type LexicalNode,
} from "lexical";

const DEFAULT_SUBTITLE = "Subtitle";

function isImageParagraph(block: ElementNode): boolean {
  return block.getChildren().some((child) => $isDecoratorNode(child));
}

function isItalicOnly(node: LexicalNode | null): node is ElementNode {
  if (!$isElementNode(node)) return false;
  const texts = node.getAllTextNodes();
  return texts.length > 0 && texts.every((text) => text.hasFormat("italic"));
}

/**
 * On an image, adds (or jumps to) an italic paragraph right below it. That pairing is what the
 * site renders as a centered grey subtitle. On any other paragraph it toggles italics across the
 * whole paragraph, so an existing line can be turned into a subtitle or back.
 */
function toggleSubtitle(): void {
  const selection = $getSelection();
  let anchor: LexicalNode | undefined;
  if ($isRangeSelection(selection)) {
    anchor = selection.anchor.getNode();
  } else if ($isNodeSelection(selection)) {
    anchor = selection.getNodes()[0];
  }
  const block = anchor?.getTopLevelElement();
  if (!$isElementNode(block)) return;

  if (isImageParagraph(block)) {
    const next = block.getNextSibling();
    if (isItalicOnly(next)) {
      next.selectEnd();
      return;
    }
    const paragraph = $createParagraphNode();
    const text = $createTextNode(DEFAULT_SUBTITLE);
    text.toggleFormat("italic");
    paragraph.append(text);
    block.insertAfter(paragraph);
    text.select(0, DEFAULT_SUBTITLE.length);
    return;
  }

  const texts = block.getAllTextNodes();
  if (texts.length === 0) return;
  const allItalic = texts.every((text) => text.hasFormat("italic"));
  for (const text of texts) {
    if (text.hasFormat("italic") === allItalic) {
      text.toggleFormat("italic");
    }
  }
}

export function SubtitleButton() {
  const editor = useCellValue(activeEditor$);

  return (
    <ButtonWithTooltip
      title="Subtitle: italic caption under an image (or toggle italics on this paragraph)"
      disabled={!editor}
      onClick={() => {
        editor?.update(toggleSubtitle);
        editor?.focus();
      }}
    >
      Subtitle
    </ButtonWithTooltip>
  );
}
