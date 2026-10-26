"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function VersionLogLink() {
  const active = usePathname() === "/version-log";

  return (
    <Link
      className={`masthead__version${active ? " masthead__version--active" : ""}`}
      href="/version-log"
      target="_self"
      aria-current={active ? "page" : undefined}
      onClick={active ? (event) => event.preventDefault() : undefined}
    >
      Version log
    </Link>
  );
}
