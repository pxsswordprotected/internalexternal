"use client";

import { useEffect, useRef, useState } from "react";

type CopyStatus = "idle" | "copying" | "copied" | "error";

const labels: Record<CopyStatus, string> = {
  idle: "Copy all",
  copying: "Copying…",
  copied: "Copied",
  error: "Copy failed",
};

function copyWithTextarea(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "-9999px";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  document.body.appendChild(textarea);

  try {
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    return document.execCommand("copy");
  } finally {
    textarea.remove();
  }
}

export function CopyAllButton() {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(
    () => () => {
      clearTimeout(resetTimer.current);
    },
    [],
  );

  async function handleCopy() {
    if (resetTimer.current !== undefined) {
      clearTimeout(resetTimer.current);
      resetTimer.current = undefined;
    }

    setStatus("copying");
    let finalStatus: CopyStatus = "copied";

    try {
      const response = await fetch("/api/essay-text", { cache: "no-store" });
      const text = await response.text();

      if (!response.ok || text.length === 0) {
        throw new Error("Essay text is unavailable.");
      }

      let copied = false;
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          copied = true;
        } catch {
          copied = false;
        }
      }

      if (!copied) {
        try {
          copied = copyWithTextarea(text);
        } catch {
          copied = false;
        }
      }

      if (!copied) {
        throw new Error("Clipboard write failed.");
      }
    } catch {
      finalStatus = "error";
    }

    setStatus(finalStatus);
    resetTimer.current = setTimeout(() => {
      setStatus("idle");
      resetTimer.current = undefined;
    }, 2000);
  }

  return (
    <button
      type="button"
      className="editor-copy-button"
      disabled={status === "copying"}
      aria-live="polite"
      onClick={handleCopy}
    >
      {labels[status]}
    </button>
  );
}
