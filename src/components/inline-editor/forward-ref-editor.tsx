"use client";

import dynamic from "next/dynamic";
import { forwardRef } from "react";
import "@mdxeditor/editor/style.css";
import type {
  InitializedMDXEditorProps,
  InlineEditorMethods,
} from "./initialized-mdx-editor";

const ClientEditor = dynamic(
  () =>
    import("./initialized-mdx-editor").then(
      (module) => module.InitializedMDXEditor,
    ),
  { ssr: false },
);

export const ForwardRefEditor = forwardRef<
  InlineEditorMethods,
  InitializedMDXEditorProps
>(function ForwardRefEditor(props, ref) {
  return <ClientEditor {...props} ref={ref} />;
});
