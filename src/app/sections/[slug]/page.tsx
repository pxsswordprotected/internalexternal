import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdocContent } from "@/components/markdoc-content";
import { getSections, reader } from "@/lib/content";

interface SectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const sections = await getSections();
  return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = await reader.collections.sections.read(slug);
  return section ? { title: `${section.sectionNumber}. ${section.title}` } : {};
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { slug } = await params;
  const [section, sections] = await Promise.all([
    reader.collections.sections.read(slug),
    getSections(),
  ]);

  if (!section) {
    notFound();
  }

  const index = sections.findIndex((candidate) => candidate.slug === slug);
  const previous = index > 0 ? sections[index - 1] : null;
  const next = index >= 0 && index < sections.length - 1 ? sections[index + 1] : null;
  const children = sections.filter(
    (candidate) => candidate.entry.parentNumber === section.sectionNumber,
  );

  return (
    <main id="main-content" className="page-shell">
      <article>
        <header className="article-header">
          <p className="eyebrow">Section {section.sectionNumber}</p>
          <h1>{section.title}</h1>
          {section.draft ? <p className="draft-label">Rough draft</p> : null}
          <p className="section-summary placeholder">{section.summary}</p>
        </header>

        {children.length > 0 ? (
          <nav className="local-contents" aria-label="Subsections">
            <p>In this section</p>
            <ol>
              {children.map((child) => (
                <li key={child.slug}>
                  <Link href={`/sections/${child.slug}`}>
                    {child.entry.sectionNumber} {child.entry.title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <MarkdocContent content={section.content} />
      </article>

      <nav className="pagination" aria-label="Section navigation">
        {previous ? (
          <Link href={`/sections/${previous.slug}`} rel="prev">
            <span>Previous</span>
            {previous.entry.sectionNumber} {previous.entry.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/sections/${next.slug}`} rel="next">
            <span>Next</span>
            {next.entry.sectionNumber} {next.entry.title}
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
