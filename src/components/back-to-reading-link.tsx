"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const READING_PATHS: Record<string, true> = { "/": true, "/original": true };

let currentPathname: string | null = null;
let previousPathname: string | null = null;

/** Records client-side navigations so "Back to reading" can return to the exact reading position. */
export function PathnameHistory() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== currentPathname) {
      previousPathname = currentPathname;
      currentPathname = pathname;
    }
  }, [pathname]);

  return null;
}

export function BackToReadingLink() {
  const router = useRouter();

  return (
    <Link
      className="back-to-reading"
      href="/"
      target="_self"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        // Came from the essay in this tab: go back so the browser restores the scroll position.
        if (previousPathname !== null && READING_PATHS[previousPathname]) {
          event.preventDefault();
          router.back();
        }
      }}
    >
      Back to reading
    </Link>
  );
}
