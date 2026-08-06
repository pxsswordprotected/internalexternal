import { createReader } from "@keystatic/core/reader";
import type { Node } from "@markdoc/markdoc";
import keystaticConfig from "../../keystatic.config";
import { markdocToPlainText } from "@/lib/plain-text";

const sectionNumberCollator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
});

export interface EssaySection {
  slug: string;
  entry: {
    title: string;
    sectionNumber: string | null;
    parentNumber: string | null;
    summary: string | null;
    draft: boolean;
    content: () => Promise<{ node: Node }>;
  };
}

export const reader = createReader(process.cwd(), keystaticConfig);

export async function getSettings() {
  const settings = await reader.singletons.settings.read();
  if (!settings) {
    throw new Error("Site settings are missing.");
  }
  return settings;
}

export async function getSections(): Promise<EssaySection[]> {
  const sections: EssaySection[] = await reader.collections.sections.all();
  return sections.sort((left, right) => {
    const leftNumber = left.entry.sectionNumber?.trim();
    const rightNumber = right.entry.sectionNumber?.trim();

    if (leftNumber && rightNumber) {
      const numberComparison = sectionNumberCollator.compare(
        leftNumber,
        rightNumber,
      );
      if (numberComparison !== 0) {
        return numberComparison;
      }
    } else if (leftNumber) {
      return -1;
    } else if (rightNumber) {
      return 1;
    }

    return sectionNumberCollator.compare(
      left.entry.title,
      right.entry.title,
    );
  });
}

export async function getCombinedEssayPlainText(): Promise<string> {
  const sections = await getSections();
  const documents = await Promise.all(
    sections.map(async ({ entry }) => {
      const { node } = await entry.content();
      const body = markdocToPlainText(node);
      const sectionNumber = entry.sectionNumber;
      const heading = sectionNumber
        ? `${sectionNumber}${/^\d+$/.test(sectionNumber) ? "." : ""} ${entry.title}`
        : entry.title;

      return body ? `${heading}\n\n${body}` : heading;
    }),
  );

  return documents.filter(Boolean).join("\n\n\n");
}

export async function getIntroduction() {
  const introduction = await reader.singletons.introduction.read();
  if (!introduction) {
    throw new Error("Introduction content is missing.");
  }
  return introduction;
}

export async function getDraftOpening() {
  const opening = await reader.singletons.draftOpening.read();
  if (!opening) {
    throw new Error("The preserved opening draft is missing.");
  }
  return opening;
}
