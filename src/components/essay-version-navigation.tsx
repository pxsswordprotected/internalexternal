"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function EssayVersionNavigation({ children }: { children: ReactNode }) {
  const original = usePathname() === "/original";

  return (
    <>
      {original ? (
        <span className="masthead__version">Longer original · read-only</span>
      ) : (
        children
      )}
    </>
  );
}
