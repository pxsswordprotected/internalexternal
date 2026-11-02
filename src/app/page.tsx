import Link from "next/link";
import { InlineEditableSection } from "@/components/inline-editor/inline-editable-section";
import { MarkdocContent } from "@/components/markdoc-content";
import { getIntroduction, getSections } from "@/lib/content";

// Trial TL;DR block for subsections; filler until real summaries are written.
const TLDR_FILLER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";

export default async function Home() {
  const [introduction, sections] = await Promise.all([
    getIntroduction(),
    getSections(),
  ]);

  return (
    <main id="main-content" className="page-shell continuous-essay">
      <article>
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
          <MarkdocContent content={introduction.content} />
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
                entry.parentNumber ? (
                  <aside className="section-tldr" aria-label="TL;DR">
                    <p className="section-tldr__label">TL;DR</p>
                    <p className="section-tldr__text">{TLDR_FILLER}</p>
                  </aside>
                ) : undefined
              }
            >
              <MarkdocContent content={entry.content} />
            </InlineEditableSection>
          );
        })}
      </article>
    </main>
  );
}
