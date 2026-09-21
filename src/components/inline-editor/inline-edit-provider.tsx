"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import type { EditableDocumentRef } from "@/lib/editable-content";

export type InlineEditStatus =
  | "idle"
  | "loading"
  | "ready"
  | "saving"
  | "saved"
  | "error"
  | "conflict";

interface ConflictDocument {
  markdown: string;
  revision: string;
}

interface ActiveDocument {
  ref: EditableDocumentRef;
  label: string;
  originalMarkdown: string;
  draftMarkdown: string;
  revision: string;
  generation: number;
  status: InlineEditStatus;
  message: string;
  messageIsError: boolean;
  requiresAdvancedEditor: boolean;
  conflict: ConflictDocument | null;
}

interface InlineEditContextValue {
  enabled: boolean;
  active: ActiveDocument | null;
  dirty: boolean;
  toggleEnabled: () => void;
  selectDocument: (ref: EditableDocumentRef, label: string) => Promise<void>;
  updateDraft: (markdown: string, initialMarkdownNormalize: boolean) => void;
  reportEditorError: (message: string) => void;
  save: () => Promise<void>;
  discard: () => void;
  copyDraft: () => Promise<void>;
  reloadLatest: () => void;
}

const InlineEditContext = createContext<InlineEditContextValue | null>(null);
const discardConfirmation = "Discard unsaved changes?";

function documentIdentity(ref: EditableDocumentRef): string {
  return ref.kind === "introduction" ? ref.kind : `${ref.kind}:${ref.slug}`;
}

function requestUrl(ref: EditableDocumentRef): string {
  const search = new URLSearchParams({ kind: ref.kind });
  if (ref.kind === "section") search.set("slug", ref.slug);
  return `/api/inline-edit?${search.toString()}`;
}

export function InlineEditProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState<ActiveDocument | null>(null);
  const [mounted, setMounted] = useState(false);
  const requestGeneration = useRef(0);
  const dirty = Boolean(
    active && active.draftMarkdown !== active.originalMarkdown,
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.classList.toggle("inline-edit-mode", enabled && pathname === "/");
    return () => document.body.classList.remove("inline-edit-mode");
  }, [enabled, pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      requestGeneration.current += 1;
      setEnabled(false);
      setActive(null);
    }
  }, [pathname]);

  useEffect(() => {
    if (!dirty) return;

    const warnBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warnBeforeUnload);
    return () => window.removeEventListener("beforeunload", warnBeforeUnload);
  }, [dirty]);

  const toggleEnabled = useCallback(() => {
    if (enabled) {
      if (dirty && !window.confirm(discardConfirmation)) return;
      requestGeneration.current += 1;
      setActive(null);
      setEnabled(false);
      return;
    }
    setEnabled(true);
  }, [dirty, enabled]);

  const selectDocument = useCallback(
    async (ref: EditableDocumentRef, label: string) => {
      if (
        active &&
        documentIdentity(active.ref) === documentIdentity(ref) &&
        active.status !== "error"
      ) {
        return;
      }
      if (dirty && !window.confirm(discardConfirmation)) return;

      const requestId = requestGeneration.current + 1;
      requestGeneration.current = requestId;
      setActive({
        ref,
        label,
        originalMarkdown: "",
        draftMarkdown: "",
        revision: "",
        generation: requestId,
        status: "loading",
        message: "Loading…",
        messageIsError: false,
        requiresAdvancedEditor: false,
        conflict: null,
      });

      try {
        const response = await fetch(requestUrl(ref), { cache: "no-store" });
        const body: unknown = await response.json();
        if (
          !response.ok ||
          !body ||
          typeof body !== "object" ||
          typeof (body as Record<string, unknown>).markdown !== "string" ||
          typeof (body as Record<string, unknown>).revision !== "string"
        ) {
          const error =
            body &&
            typeof body === "object" &&
            typeof (body as Record<string, unknown>).error === "string"
              ? String((body as Record<string, unknown>).error)
              : "Unable to load this section.";
          throw new Error(error);
        }
        if (requestGeneration.current !== requestId) return;

        setActive({
          ref,
          label,
          originalMarkdown: (body as { markdown: string }).markdown,
          draftMarkdown: (body as { markdown: string }).markdown,
          revision: (body as { revision: string }).revision,
          generation: requestId,
          status: "ready",
          message: "",
          messageIsError: false,
          requiresAdvancedEditor: false,
          conflict: null,
        });
      } catch (error) {
        if (requestGeneration.current !== requestId) return;
        setActive((current) =>
          current && documentIdentity(current.ref) === documentIdentity(ref)
            ? {
                ...current,
                status: "error",
                message:
                  error instanceof Error
                    ? error.message
                    : "Unable to load this section.",
                messageIsError: true,
              }
            : current,
        );
      }
    },
    [active, dirty],
  );

  const updateDraft = useCallback(
    (markdown: string, initialMarkdownNormalize: boolean) => {
      if (initialMarkdownNormalize) return;
      setActive((current) =>
        current
          ? {
              ...current,
              draftMarkdown: markdown,
              status: "ready",
              message: "",
              messageIsError: false,
              conflict: null,
            }
          : current,
      );
    },
    [],
  );

  const reportEditorError = useCallback((message: string) => {
    setActive((current) =>
      current
        ? {
            ...current,
            status: "error",
            message: "This section requires the advanced editor.",
            messageIsError: true,
            requiresAdvancedEditor: true,
          }
        : current,
    );
    console.error("Unable to initialize inline Markdown editor.", message);
  }, []);

  const save = useCallback(async () => {
    if (
      !active ||
      active.draftMarkdown === active.originalMarkdown ||
      active.status === "loading" ||
      active.status === "saving" ||
      active.status === "conflict" ||
      active.requiresAdvancedEditor
    ) {
      return;
    }

    const identity = documentIdentity(active.ref);
    setActive((current) =>
      current && documentIdentity(current.ref) === identity
        ? {
            ...current,
            status: "saving",
            message: "Saving…",
            messageIsError: false,
          }
        : current,
    );

    try {
      const response = await fetch("/api/inline-edit", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...active.ref,
          markdown: active.draftMarkdown,
          revision: active.revision,
        }),
      });
      const body: unknown = await response.json();
      const payload =
        body && typeof body === "object"
          ? (body as Record<string, unknown>)
          : {};

      if (
        response.status === 409 &&
        typeof payload.markdown === "string" &&
        typeof payload.revision === "string"
      ) {
        setActive((current) =>
          current && documentIdentity(current.ref) === identity
            ? {
                ...current,
                status: "conflict",
                message: "Document changed since editing began.",
                messageIsError: true,
                conflict: {
                  markdown: payload.markdown as string,
                  revision: payload.revision as string,
                },
              }
            : current,
        );
        return;
      }

      if (!response.ok || typeof payload.revision !== "string") {
        const details = Array.isArray(payload.details)
          ? payload.details.filter((item): item is string => typeof item === "string")
          : [];
        throw new Error(
          details.length > 0
            ? details.join(" ")
            : typeof payload.error === "string"
              ? payload.error
              : "Unable to save document.",
        );
      }

      setActive((current) =>
        current && documentIdentity(current.ref) === identity
          ? {
              ...current,
              originalMarkdown: current.draftMarkdown,
              revision: payload.revision as string,
              status: "saved",
              message: "Saved",
              messageIsError: false,
              conflict: null,
            }
          : current,
      );
      router.refresh();
    } catch (error) {
      setActive((current) =>
        current && documentIdentity(current.ref) === identity
          ? {
              ...current,
              status: "error",
              message:
                error instanceof Error
                  ? error.message
                  : "Unable to save document.",
              messageIsError: true,
            }
          : current,
      );
    }
  }, [active, router]);

  useEffect(() => {
    if (!active) return;

    const saveWithKeyboard = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "s" &&
        (event.metaKey || event.ctrlKey) &&
        !event.altKey
      ) {
        event.preventDefault();
        void save();
      }
    };
    window.addEventListener("keydown", saveWithKeyboard);
    return () => window.removeEventListener("keydown", saveWithKeyboard);
  }, [active, save]);

  const discard = useCallback(() => {
    setActive((current) =>
      current
        ? {
            ...current,
            draftMarkdown: current.originalMarkdown,
            generation: current.generation + 1,
            status: "ready",
            message: "",
            messageIsError: false,
            requiresAdvancedEditor: false,
            conflict: null,
          }
        : current,
    );
  }, []);

  const copyDraft = useCallback(async () => {
    if (!active) return;
    try {
      await navigator.clipboard.writeText(active.draftMarkdown);
      setActive((current) =>
        current
          ? { ...current, message: "Draft copied", messageIsError: false }
          : current,
      );
    } catch {
      setActive((current) =>
        current
          ? { ...current, message: "Copy failed", messageIsError: true }
          : current,
      );
    }
  }, [active]);

  const reloadLatest = useCallback(() => {
    if (!active?.conflict || !window.confirm(discardConfirmation)) return;
    const { markdown, revision } = active.conflict;
    setActive((current) =>
      current
        ? {
            ...current,
            originalMarkdown: markdown,
            draftMarkdown: markdown,
            revision,
            generation: current.generation + 1,
            status: "ready",
            message: "",
            messageIsError: false,
            conflict: null,
          }
        : current,
    );
  }, [active]);

  const value = useMemo<InlineEditContextValue>(
    () => ({
      enabled,
      active,
      dirty,
      toggleEnabled,
      selectDocument,
      updateDraft,
      reportEditorError,
      save,
      discard,
      copyDraft,
      reloadLatest,
    }),
    [
      active,
      copyDraft,
      dirty,
      discard,
      enabled,
      reloadLatest,
      reportEditorError,
      save,
      selectDocument,
      toggleEnabled,
      updateDraft,
    ],
  );

  const emptyToolbar =
    mounted && enabled && !active
      ? createPortal(
          <div className="inline-editor-toolbar inline-editor-toolbar--empty">
            <span className="inline-editor-toolbar__label">
              Select a section to edit
            </span>
            <Link
              className="inline-editor-toolbar__link"
              href="/keystatic/collection/sections"
              target="_blank"
            >
              Section settings
            </Link>
            <span className="inline-editor-toolbar__disabled-controls" aria-hidden="true">
              <button type="button" disabled>Undo</button>
              <button type="button" disabled>Format</button>
              <button type="button" disabled>Bold</button>
              <button type="button" disabled>Link</button>
              <button type="button" disabled>List</button>
              <button type="button" disabled>Image</button>
            </span>
            <span className="inline-editor-toolbar__spacer" />
            <button type="button" disabled>Save</button>
          </div>,
          document.body,
        )
      : null;

  return (
    <InlineEditContext.Provider value={value}>
      {children}
      {emptyToolbar}
    </InlineEditContext.Provider>
  );
}

export function useInlineEdit(): InlineEditContextValue {
  const context = useContext(InlineEditContext);
  if (!context) {
    throw new Error("useInlineEdit must be used within InlineEditProvider.");
  }
  return context;
}

export function getEditableDocumentIdentity(ref: EditableDocumentRef): string {
  return documentIdentity(ref);
}
