import { collection, config, fields, singleton } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

const richText = (label: string) =>
  fields.markdoc({
    label,
    extension: "md",
    options: {
      image: {
        directory: "public/images/sections",
        publicPath: "/images/sections/",
      },
    },
    components: {
      Diagram: block({
        label: "Diagram",
        schema: {
          name: fields.text({
            label: "Diagram component name",
            description:
              "The matching component must be implemented before this diagram can render.",
          }),
          caption: fields.text({ label: "Caption", multiline: true }),
          description: fields.text({
            label: "Accessible description",
            multiline: true,
          }),
          layout: fields.select({
            label: "Layout",
            options: [
              { label: "Reading column", value: "column" },
              { label: "Wide", value: "wide" },
              { label: "Full width", value: "full" },
            ],
            defaultValue: "wide",
          }),
        },
      }),
    },
  });

export default config({
  storage: { kind: "local" },
  ui: { brand: { name: "The Problem of Expression" } },
  collections: {
    sections: collection({
      label: "Essay sections",
      slugField: "title",
      path: "src/content/sections/*",
      columns: ["sectionNumber"],
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        sectionNumber: fields.text({ label: "Section number" }),
        parentNumber: fields.text({
          label: "Parent section number",
          description: "Leave blank for a top-level section.",
        }),
        summary: fields.text({
          label: "Homepage summary",
          multiline: true,
        }),
        draft: fields.checkbox({
          label: "Rough draft",
          defaultValue: true,
        }),
        content: richText("Section text"),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: "Site settings",
      path: "src/content/settings",
      schema: {
        siteTitle: fields.text({ label: "Site title" }),
        siteSubtitle: fields.text({ label: "Site subtitle" }),
        author: fields.text({ label: "Author" }),
        publicationDate: fields.text({ label: "Publication date" }),
        pdfUrl: fields.url({ label: "Full essay PDF URL" }),
      },
    }),
    introduction: singleton({
      label: "Introduction page",
      path: "src/content/introduction",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Page title" }),
        content: richText("Introduction text"),
      },
    }),
    draftOpening: singleton({
      label: "Unplaced opening draft",
      path: "src/content/draft-opening",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Placement note" }),
        content: richText("Original unnumbered text"),
      },
    }),
  },
});
