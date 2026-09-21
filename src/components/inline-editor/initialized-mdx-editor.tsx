"use client";

import Link from "next/link";
import { forwardRef } from "react";
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  quotePlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";

export interface InitializedMDXEditorProps {
  markdown: string;
  label: string;
  advancedHref: string;
  statusText: string;
  statusIsError: boolean;
  saveLabel: "Save" | "Saving…" | "Saved";
  saveDisabled: boolean;
  conflicted: boolean;
  onChange: (markdown: string, initialMarkdownNormalize: boolean) => void;
  onError: (message: string) => void;
  onSave: () => void;
  onDiscard: () => void;
  onCopyDraft: () => void;
  onReloadLatest: () => void;
}

export type InlineEditorMethods = MDXEditorMethods;

export const InitializedMDXEditor = forwardRef<
  MDXEditorMethods,
  InitializedMDXEditorProps
>(function InitializedMDXEditor(
  {
    markdown,
    label,
    advancedHref,
    statusText,
    statusIsError,
    saveLabel,
    saveDisabled,
    conflicted,
    onChange,
    onError,
    onSave,
    onDiscard,
    onCopyDraft,
    onReloadLatest,
  },
  ref,
) {
  return (
    <MDXEditor
      ref={ref}
      markdown={markdown}
      className="inline-editor"
      contentEditableClassName="inline-editor-content prose"
      onChange={onChange}
      onError={({ error }) => onError(error)}
      plugins={[
        headingsPlugin({ allowedHeadingLevels: [2, 3, 4] }),
        listsPlugin(),
        quotePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({
          disableImageResize: true,
          allowSetImageDimensions: false,
        }),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarClassName: "inline-editor-toolbar",
          toolbarContents: () => (
            <>
              <span className="inline-editor-toolbar__label">{label}</span>
              <UndoRedo />
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles options={["Bold", "Italic"]} />
              <CreateLink />
              <ListsToggle options={["bullet", "number"]} />
              <InsertImage />
              <span
                className={`inline-editor-toolbar__status${statusIsError ? " inline-editor-toolbar__status--error" : ""}`}
                role="status"
                aria-live="polite"
              >
                {statusText}
              </span>
              <Link
                className="inline-editor-toolbar__link"
                href={advancedHref}
                target="_blank"
              >
                Advanced settings
              </Link>
              <button type="button" onClick={onDiscard}>
                Discard
              </button>
              <span className="inline-editor-toolbar__spacer" />
              {conflicted ? (
                <span className="inline-editor-toolbar__conflict-actions">
                  <button type="button" onClick={onCopyDraft}>
                    Copy draft
                  </button>
                  <button type="button" onClick={onReloadLatest}>
                    Reload latest
                  </button>
                </span>
              ) : (
                <button
                  className="inline-editor-toolbar__save"
                  type="button"
                  disabled={saveDisabled}
                  onClick={onSave}
                >
                  {saveLabel}
                </button>
              )}
            </>
          ),
        }),
      ]}
    />
  );
});
