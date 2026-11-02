import Markdoc, { type RenderableTreeNode } from "@markdoc/markdoc";
import exclusionData from "@/content/glossary-exclusions.json";
import { GLOSSARY, GLOSSARY_BY_FORM } from "@/lib/glossary";

const SKIP_TAGS: Record<string, true> = {
  a: true,
  code: true,
  pre: true,
  blockquote: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  GlossaryTerm: true,
};

// Longest forms first so the longest term wins at any position.
const alternatives = GLOSSARY.flatMap((entry) => entry.forms)
  .sort((a, b) => b.length - a.length)
  .map((form) => form.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  .join("|");

const PATTERN = new RegExp(`(?<![\\p{L}\\p{N}])(${alternatives})(?![\\p{L}\\p{N}])`, "giu");

// Hand-marked occurrences that use a word in its everyday sense. Each entry is the surrounding
// text with the occurrence in brackets, e.g. "different [fields] of science". Context must sit
// inside one text node (no bold/italic/link boundary in between).
interface Exclusion {
  before: string;
  after: string;
}

const EXCLUSIONS_BY_HIT: Record<string, Exclusion[]> = {};
for (const raw of exclusionData) {
  const parsed = /^([\s\S]*)\[([\s\S]+)\]([\s\S]*)$/.exec(raw);
  if (!parsed) throw new Error(`Malformed glossary exclusion "${raw}"`);
  const hit = parsed[2].toLowerCase();
  if (!(hit in GLOSSARY_BY_FORM)) {
    throw new Error(`Glossary exclusion "${raw}" does not bracket a glossary form`);
  }
  (EXCLUSIONS_BY_HIT[hit] ??= []).push({
    before: parsed[1].toLowerCase(),
    after: parsed[3].toLowerCase(),
  });
}

function splitString(
  text: string,
  sectionId: string,
  marked: Set<string>,
): RenderableTreeNode[] {
  const parts: RenderableTreeNode[] = [];
  let last = 0;

  for (const match of text.matchAll(PATTERN)) {
    const hitText = match[0];
    const entry = GLOSSARY_BY_FORM[hitText.toLowerCase()];
    if (!entry || entry.definedIn === sectionId || marked.has(entry.id)) continue;

    const start = match.index ?? 0;
    const end = start + hitText.length;
    const before = text.slice(Math.max(0, start - 80), start).toLowerCase();
    const after = text.slice(end, end + 80).toLowerCase();
    const excluded = EXCLUSIONS_BY_HIT[hitText.toLowerCase()]?.some(
      (exclusion) => before.endsWith(exclusion.before) && after.startsWith(exclusion.after),
    );
    if (excluded) continue;

    marked.add(entry.id);
    if (start > last) parts.push(text.slice(last, start));
    parts.push(new Markdoc.Tag("GlossaryTerm", { termId: entry.id }, [hitText]));
    last = end;
  }

  if (last === 0) return [text];
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function visit(
  node: RenderableTreeNode,
  sectionId: string,
  marked: Set<string>,
): RenderableTreeNode[] {
  if (typeof node === "string") return splitString(node, sectionId, marked);
  if (!Markdoc.Tag.isTag(node)) return [node];
  if (SKIP_TAGS[node.name]) return [node];

  const children = node.children.flatMap((child) => visit(child, sectionId, marked));
  return [new Markdoc.Tag(node.name, node.attributes, children)];
}

export function applyGlossary(node: RenderableTreeNode, sectionId: string): RenderableTreeNode {
  if (!Markdoc.Tag.isTag(node)) return node;
  return visit(node, sectionId, new Set<string>())[0];
}
