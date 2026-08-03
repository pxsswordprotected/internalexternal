import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export interface EssaySection {
  slug: string;
  entry: {
    title: string;
    sectionNumber: string | null;
    parentNumber: string | null;
    order: number | null;
    summary: string | null;
    draft: boolean;
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
  return sections.sort(
    (left, right) =>
      (left.entry.order ?? Number.MAX_SAFE_INTEGER) -
      (right.entry.order ?? Number.MAX_SAFE_INTEGER),
  );
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
