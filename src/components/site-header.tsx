import Link from "next/link";
import { getSections, getSettings } from "@/lib/content";

export async function SiteHeader() {
  const [settings, sections] = await Promise.all([getSettings(), getSections()]);
  const topLevel = sections.filter((section) => !section.entry.parentNumber);

  const navigation = (
    <>
      <Link href="/">Introduction</Link>
      {topLevel.map((section) => (
        <Link href={`/sections/${section.slug}`} key={section.slug}>
          <span>{section.entry.sectionNumber}.</span> {section.entry.title}
        </Link>
      ))}
    </>
  );

  return (
    <header className="site-header">
      <Link className="masthead" href="/">
        <span className="masthead__title">{settings.siteTitle}</span>
        <span className="masthead__subtitle">{settings.siteSubtitle}</span>
      </Link>

      <nav className="desktop-navigation" aria-label="Essay sections">
        {navigation}
      </nav>

      <details className="mobile-navigation">
        <summary>Menu</summary>
        <nav aria-label="Essay sections">{navigation}</nav>
      </details>
    </header>
  );
}
