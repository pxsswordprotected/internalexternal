import type { ReactNode } from "react";

function AlertCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 7L12 13" />
      <path d="M12 17.01L12.01 16.9989" />
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    </svg>
  );
}

/**
 * Statuses a section can be marked with. To add one, add an entry here and a way to set it
 * (the `incomplete` checkbox in keystatic.config.ts is the example).
 */
const SECTION_STATUSES = {
  incomplete: {
    icon: <AlertCircleIcon />,
    label: "This section is outdated and needs a rewrite",
  },
} satisfies Record<string, { icon: ReactNode; label: string }>;

export type SectionStatusKind = keyof typeof SECTION_STATUSES;

/** Icon plus note, meant to sit inline right after a section title. */
export function SectionStatus({ status }: { status: SectionStatusKind }) {
  const { icon, label } = SECTION_STATUSES[status];
  return (
    <span className="section-status">
      {icon}
      {label}
    </span>
  );
}
