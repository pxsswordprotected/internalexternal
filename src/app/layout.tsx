import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    { path: "../../fonts/PPNeueMontreal-Book.otf", weight: "400", style: "normal" },
    { path: "../../fonts/PPNeueMontreal-Italic.otf", weight: "400", style: "italic" },
    { path: "../../fonts/PPNeueMontreal-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Internal, then External",
    template: "%s — Internal, then External",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <base target="_blank" />
      </head>
      <body className={neueMontreal.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
