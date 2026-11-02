import glossaryData from "@/content/glossary.json";

export interface GlossaryEntry {
  id: string;
  label: string;
  forms: string[];
  definedIn: string | null;
  definition: string;
}

export const GLOSSARY: readonly GlossaryEntry[] = glossaryData;

export const GLOSSARY_BY_ID: Record<string, GlossaryEntry> = Object.fromEntries(
  GLOSSARY.map((entry) => [entry.id, entry]),
);

export const GLOSSARY_BY_FORM: Record<string, GlossaryEntry> = (() => {
  const byForm: Record<string, GlossaryEntry> = {};
  for (const entry of GLOSSARY) {
    for (const form of entry.forms) {
      const key = form.toLowerCase();
      if (key in byForm) {
        throw new Error(`Duplicate glossary form "${form}"`);
      }
      byForm[key] = entry;
    }
  }
  return byForm;
})();
