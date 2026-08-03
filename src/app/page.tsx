import Link from "next/link";
import { MarkdocContent } from "@/components/markdoc-content";
import { getIntroduction, getSections, getSettings } from "@/lib/content";

export default async function Home() {
  const [introduction, sections, settings] = await Promise.all([
    getIntroduction(),
    getSections(),
    getSettings(),
  ]);
  const topLevel = sections.filter((section) => !section.entry.parentNumber);

  return (
    <main id="main-content" className="page-shell">
      <article className="article-header">
        <p className="eyebrow">Introduction</p>
        <h1>{introduction.title}</h1>
        <p className="byline">
          {settings.author} · {settings.publicationDate}
        </p>
        <MarkdocContent content={introduction.content} />
      </article>

      <section className="contents" aria-labelledby="contents-heading">
        <h2 id="contents-heading">Table of contents</h2>
        <ol className="contents__list">
          {topLevel.map((section) => {
            const children = sections.filter(
              (candidate) => candidate.entry.parentNumber === section.entry.sectionNumber,
            );

            return (
              <li className="contents__group" key={section.slug}>
                <Link className="contents__entry" href={`/sections/${section.slug}`}>
                  <span className="contents__number">{section.entry.sectionNumber}.</span>
                  <span>
                    <strong>{section.entry.title}</strong>
                    <span className="contents__summary placeholder">
                      {section.entry.summary}
                    </span>
                  </span>
                </Link>

                {children.length > 0 ? (
                  <ol className="contents__children">
                    {children.map((child) => (
                      <li key={child.slug}>
                        <Link className="contents__entry" href={`/sections/${child.slug}`}>
                          <span className="contents__number">{child.entry.sectionNumber}</span>
                          <span>
                            <strong>{child.entry.title}</strong>
                            <span className="contents__summary placeholder">
                              {child.entry.summary}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </li>
            );
          })}
        </ol>
      </section>

      <aside className="placement-note">
        <p>[PLACEHOLDER: Decide where the existing unnumbered opening draft belongs]</p>
        <Link href="/draft-opening">Review preserved opening text</Link>
      </aside>
    </main>
  );
}
