import type { Metadata } from "next";
import Link from "next/link";
import { CopyAllButton } from "@/components/copy-all-button";
import { getSections, type EssaySection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Edit essay sections",
  robots: { index: false, follow: false },
};


type SectionGroup = {
  root: EssaySection;
  children: EssaySection[];
};

function getSectionEditorHref(slug: string): string {
  return `/keystatic/collection/sections/item/${encodeURIComponent(slug)}`;
}

function SectionEditLink({ section }: { section: EssaySection }) {
  return (
    <Link className="editor-section-row" href={getSectionEditorHref(section.slug)}>
      <span className="editor-section-row__number">
        {section.entry.sectionNumber || "[Missing section number]"}
      </span>
      <span className="editor-section-row__title">{section.entry.title}</span>
      <span className="editor-section-row__action">Edit</span>
    </Link>
  );
}

export default async function EditSectionsPage() {
  const sections = await getSections();
  const groups: SectionGroup[] = [];
  const firstGroupByNumber = new Map<string, SectionGroup>();
  const ungrouped: EssaySection[] = [];

  for (const section of sections) {
    const { parentNumber, sectionNumber } = section.entry;

    if (sectionNumber && !parentNumber) {
      const group = { root: section, children: [] };
      groups.push(group);

      if (!firstGroupByNumber.has(sectionNumber)) {
        firstGroupByNumber.set(sectionNumber, group);
      }
    }
  }

  for (const section of sections) {
    const { parentNumber, sectionNumber } = section.entry;

    if (!sectionNumber) {
      ungrouped.push(section);
      continue;
    }

    if (!parentNumber) {
      continue;
    }

    const group = firstGroupByNumber.get(parentNumber);
    if (group) {
      group.children.push(section);
    } else {
      ungrouped.push(section);
    }
  }

  return (
    <main id="main-content" className="page-shell editor-index">
      <header className="editor-index__header">
        <p className="eyebrow">Browser editor</p>
        <h1>Essay sections</h1>
        <p>Grouped by section number.</p>
        <div className="editor-index__actions">
          <Link
            className="editor-index__dashboard"
            href="/keystatic/collection/sections"
          >
            Open Keystatic section list
          </Link>
          <CopyAllButton />
        </div>
      </header>

      {groups.map((group) => (
        <section className="editor-section-group" key={group.root.slug}>
          <h2>
            <SectionEditLink section={group.root} />
          </h2>
          {group.children.length > 0 ? (
            <ol className="editor-section-list">
              {group.children.map((section) => (
                <li key={section.slug}>
                  <SectionEditLink section={section} />
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}

      {ungrouped.length > 0 ? (
        <section className="editor-section-group editor-section-group--ungrouped">
          <h2>Ungrouped sections</h2>
          <ol className="editor-section-list">
            {ungrouped.map((section) => (
              <li key={section.slug}>
                <SectionEditLink section={section} />
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </main>
  );
}
