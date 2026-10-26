import Link from "next/link";
import { EssayContentsNav } from "@/components/essay-contents-nav";
import { EssayVersionNavigation } from "@/components/essay-version-navigation";
import { getSections, getSettings } from "@/lib/content";
import { InlineEditToggle } from "@/components/inline-editor/inline-edit-toggle";
import { VersionLogLink } from "@/components/version-log-link";

export async function SiteHeader() {
  const [settings, sections] = await Promise.all([getSettings(), getSections()]);
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
      grouped: !section.entry.sectionNumber || !section.entry.parentNumber,
    })),
  ];

  return (
    <header className="site-header">
      <div className="masthead">
        <Link className="masthead__title" href="/">{settings.siteTitle}</Link>
        <div className="masthead__meta">
          <span className="masthead__edition">Working Edition v0.1</span>
          <span className="masthead__star" aria-hidden="true">★</span>
          <VersionLogLink />
        </div>
      </div>
      <div className="page-tools">
        <EssayVersionNavigation>
          <Link className="page-tools__link" href="/edit-sections">Essay section tools</Link>
          {process.env.NODE_ENV === "development" ? <InlineEditToggle /> : null}
        </EssayVersionNavigation>
      </div>
      <EssayContentsNav items={contentsItems} />
    </header>
  );
}
