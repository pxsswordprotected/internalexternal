import Link from "next/link";
import { EssayContentsNav } from "@/components/essay-contents-nav";
import { getSections, getSettings } from "@/lib/content";
import { InlineEditToggle } from "@/components/inline-editor/inline-edit-toggle";

export async function SiteHeader() {
  const [settings, sections] = await Promise.all([getSettings(), getSections()]);
  const firstRoot = sections.find((section) => section.entry.sectionNumber && !section.entry.parentNumber);
  const contentsItems = [
    {
      targetId: "introduction",
      href: "/#introduction",
      label: "Introduction",
      slug: null,
      sectionNumber: null,
      parentNumber: null,
      grouped: false,
    },
    ...sections.map((section) => ({
      targetId: `section-${section.slug}`,
      href: `/#section-${section.slug}`,
      label: `${section.entry.sectionNumber ? `${section.entry.sectionNumber} ` : ""}${section.entry.title}`,
      slug: section.slug,
      sectionNumber: section.entry.sectionNumber,
      parentNumber: section.entry.parentNumber,
      grouped:
        !section.entry.sectionNumber ||
        (!section.entry.parentNumber && section !== firstRoot),
    })),
  ];

  return (
    <header className="site-header">
      <div className="masthead">
        <Link className="masthead__title" href="/">{settings.siteTitle}</Link>
        <div className="masthead__utilities">
          <span className="masthead__version" aria-disabled="true">Version log</span>
          <Link className="masthead__tools" href="/edit-sections">Essay section tools</Link>
          {process.env.NODE_ENV === "development" ? <InlineEditToggle /> : null}
        </div>
      </div>
      <EssayContentsNav items={contentsItems} />
    </header>
  );
}
