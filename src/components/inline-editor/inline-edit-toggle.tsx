"use client";

import { usePathname } from "next/navigation";
import { useInlineEdit } from "./inline-edit-provider";

export function InlineEditToggle() {
  const pathname = usePathname();
  const { enabled, toggleEnabled } = useInlineEdit();

  if (pathname !== "/") return null;

  return (
    <button
      className="masthead__edit"
      type="button"
      onClick={toggleEnabled}
    >
      {enabled ? "Exit edit" : "Edit"}
    </button>
  );
}
