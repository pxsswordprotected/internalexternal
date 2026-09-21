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
        <section id="introduction">
          <h1>Introduction</h1>
          <MarkdocContent content={introduction.content} />
        </section>
        {sections.map(({ slug, entry }) => {
          const Heading = entry.parentNumber ? "h3" : "h2";
          return (
            <section
              key={slug}
              id={`section-${slug}`}
              className={entry.parentNumber ? "essay-subsection" : "essay-section"}
            >
              <Heading>{entry.sectionNumber ? `${entry.sectionNumber} ` : ""}{entry.title}</Heading>
              <MarkdocContent content={entry.content} />
            </section>
          );
        })}
      </article>
    </main>
  );
}
