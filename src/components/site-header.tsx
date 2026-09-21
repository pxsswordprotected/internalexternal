import Link from "next/link";
import { getSections, getSettings } from "@/lib/content";

export async function SiteHeader() {
  const [settings, sections] = await Promise.all([getSettings(), getSections()]);
  const firstRoot = sections.find((section) => section.entry.sectionNumber && !section.entry.parentNumber);

  return (
    <header className="site-header">
      <div className="masthead">
        <Link className="masthead__title" href="/">{settings.siteTitle}</Link>
        <div className="masthead__utilities">
          <span className="masthead__version" aria-disabled="true">Version log</span>
          <Link className="masthead__tools" href="/edit-sections">Essay section tools</Link>
        </div>
      </div>
      <nav className="contents" aria-label="Essay sections">
        <ol className="contents__list">
          <li><Link href="/#introduction">Introduction</Link></li>
          {sections.map((section) => (
            <li
              key={section.slug}
              className={!section.entry.sectionNumber || (!section.entry.parentNumber && section !== firstRoot) ? "contents__group" : undefined}
            >
              <Link href={`/#section-${section.slug}`}>
                {section.entry.sectionNumber ? `${section.entry.sectionNumber} ` : ""}{section.entry.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
