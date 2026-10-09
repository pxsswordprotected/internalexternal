"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function EssayVersionNavigation({ children }: { children: ReactNode }) {
  const compressed = usePathname() === "/compressed";

  return (
    <>
      <Link
        className="masthead__tools"
        href={compressed ? "/" : "/compressed"}
        target="_self"
      >
        {compressed ? "View original" : "View compressed"}
      </Link>
      {compressed ? (
        <span className="masthead__version">Compressed · read-only</span>
      ) : (
        children
      )}
    </>
  );
}
