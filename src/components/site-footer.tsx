import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/edit-sections">Edit essay sections by reading order</Link>
    </footer>
  );
}
