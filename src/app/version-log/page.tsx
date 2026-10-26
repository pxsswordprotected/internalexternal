import type { Metadata } from "next";
import { MarkdocContent } from "@/components/markdoc-content";
import { getVersionLog } from "@/lib/content";

export const metadata: Metadata = {
  title: "Version log",
};

export default async function VersionLogPage() {
  const versions = await getVersionLog();

  return (
    <main id="main-content" className="page-shell continuous-essay version-log">
      <article>
        {versions.map(({ slug, entry }) => (
          <section key={slug} id={`version-${slug}`} className="version-log__entry">
            <h2>Version {entry.version}</h2>
            <MarkdocContent content={entry.content} />
            <hr className="version-log__divider" />
          </section>
        ))}
      </article>
    </main>
  );
}
