import Link from "next/link";
import { GlossaryProvider } from "@/components/glossary";
import { InlineEditableSection } from "@/components/inline-editor/inline-editable-section";
import { MarkdocContent } from "@/components/markdoc-content";
import { getIntroduction, getSections } from "@/lib/content";

export default async function Home() {
  const [introduction, sections] = await Promise.all([
    getIntroduction(),
    getSections(),
  ]);

  return (
    <main id="main-content" className="page-shell continuous-essay">
      <article>
        <GlossaryProvider>
          <p className="edition-note">
            This is a working edition, meaning the text is neither complete nor final. It is in a
            constant state of change, and you can find the changes in the{" "}
            <Link href="/version-log" target="_self">version log</Link>.
          </p>
          <InlineEditableSection
            documentRef={{ kind: "introduction" }}
            label="Introduction"
            id="introduction"
            headingLevel="h1"
            heading="Introduction"
          >
            <MarkdocContent content={introduction.content} glossarySection="Intro" />
          </InlineEditableSection>
          {sections.map(({ slug, entry }) => {
            const headingLevel = entry.parentNumber ? "h3" : "h2";
            const heading = (
              <>
                {entry.sectionNumber ? `${entry.sectionNumber} ` : ""}
                {entry.title}
              </>
            );
            return (
              <InlineEditableSection
                key={slug}
                documentRef={{ kind: "section", slug }}
                label={entry.sectionNumber ? `${entry.sectionNumber} ${entry.title}` : entry.title}
                id={`section-${slug}`}
                className={entry.parentNumber ? "essay-subsection" : "essay-section"}
                headingLevel={headingLevel}
                heading={heading}
                summary={
                  entry.parentNumber && entry.tldr ? (
                    <aside className="section-tldr" aria-label="TL;DR">
                      <p className="section-tldr__label">TL;DR</p>
                      <p className="section-tldr__text">{entry.tldr}</p>
                    </aside>
                  ) : undefined
                }
              >
                <MarkdocContent content={entry.content} glossarySection={entry.sectionNumber ?? ""} />
              </InlineEditableSection>
            );
          })}
        </GlossaryProvider>
      </article>
    </main>
  );
}
