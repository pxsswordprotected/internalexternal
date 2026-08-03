import type { Metadata } from "next";
import { MarkdocContent } from "@/components/markdoc-content";
import { getDraftOpening } from "@/lib/content";

export const metadata: Metadata = {
  title: "Unplaced opening draft",
};

export default async function DraftOpeningPage() {
  const opening = await getDraftOpening();

  return (
    <main id="main-content" className="page-shell">
      <article>
        <header className="article-header">
          <p className="eyebrow">Preserved source text</p>
          <h1>Unplaced opening draft</h1>
          <p className="section-summary placeholder">{opening.title}</p>
        </header>
        <MarkdocContent content={opening.content} />
      </article>
    </main>
  );
}
