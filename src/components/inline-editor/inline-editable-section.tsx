"use client";

import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import type { EditableDocumentRef } from "@/lib/editable-content";
import { ForwardRefEditor } from "./forward-ref-editor";
import {
  getEditableDocumentIdentity,
  useInlineEdit,
} from "./inline-edit-provider";

interface InlineEditableSectionProps {
  documentRef: EditableDocumentRef;
  label: string;
  id: string;
  className?: string;
  headingLevel: "h1" | "h2" | "h3";
  heading: ReactNode;
  children: ReactNode;
}

export function InlineEditableSection({
  documentRef,
  label,
  id,
  className,
  headingLevel,
  heading,
  children,
}: InlineEditableSectionProps) {
  const editor = useInlineEdit();
  const Heading = headingLevel as ElementType;
  const active = Boolean(
    editor.active &&
      getEditableDocumentIdentity(editor.active.ref) ===
        getEditableDocumentIdentity(documentRef),
  );
  const activeDocument = active ? editor.active : null;
  const sectionClassName = [
    className,
    editor.enabled ? "inline-editor-section--selectable" : "",
    active ? "inline-editor-section--active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (!editor.enabled) {
    return (
      <section id={id} className={className}>
        <Heading>{heading}</Heading>
        {children}
      </section>
    );
  }

  const advancedHref =
    documentRef.kind === "introduction"
      ? "/keystatic/singleton/introduction"
      : `/keystatic/collection/sections/item/${encodeURIComponent(documentRef.slug)}`;
  const showEditor = Boolean(
    activeDocument &&
      activeDocument.status !== "loading" &&
      !activeDocument.requiresAdvancedEditor &&
      activeDocument.revision,
  );
  const saveLabel =
    activeDocument?.status === "saving"
      ? "Saving…"
      : activeDocument?.status === "saved" && !editor.dirty
        ? "Saved"
        : "Save";

  return (
    <section id={id} className={sectionClassName}>
      <div className="inline-editor-section__heading">
        <Heading>{heading}</Heading>
        <button
          className="inline-editor-section__select"
          type="button"
          onClick={() => void editor.selectDocument(documentRef, label)}
        >
          {active ? "Editing this section" : "Edit this section"}
        </button>
        {activeDocument &&
        (activeDocument.status === "loading" ||
          activeDocument.requiresAdvancedEditor) ? (
          <span
            className="inline-editor-section__status"
            role="status"
            aria-live="polite"
          >
            {activeDocument.message}
          </span>
        ) : null}
        {activeDocument?.requiresAdvancedEditor ? (
          <Link
            className="inline-editor-section__advanced"
            href={advancedHref}
            target="_blank"
          >
            Advanced settings
          </Link>
        ) : null}
      </div>
      {showEditor && activeDocument ? (
        <ForwardRefEditor
          key={`${getEditableDocumentIdentity(documentRef)}:${activeDocument.generation}`}
          markdown={activeDocument.draftMarkdown}
          label={activeDocument.label}
          advancedHref={advancedHref}
          statusText={activeDocument.message}
          statusIsError={activeDocument.messageIsError}
          saveLabel={saveLabel}
          saveDisabled={
            !editor.dirty ||
            activeDocument.status === "loading" ||
            activeDocument.status === "saving" ||
            activeDocument.status === "conflict" ||
            activeDocument.status === "error"
          }
          conflicted={activeDocument.status === "conflict"}
          onChange={editor.updateDraft}
          onError={editor.reportEditorError}
          onSave={() => void editor.save()}
          onDiscard={editor.discard}
          onCopyDraft={() => void editor.copyDraft()}
          onReloadLatest={editor.reloadLatest}
        />
      ) : (
        children
      )}
    </section>
  );
}
