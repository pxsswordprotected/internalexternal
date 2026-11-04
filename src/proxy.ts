  import { NextResponse } from "next/server";

// The Keystatic admin runs in local mode, which has no authentication and writes straight to the
// content files. It is for `next dev` only, so every route that edits content returns 404 in
// production. To edit from a deployed site, switch Keystatic to GitHub mode instead.
export function proxy() {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }
  return new NextResponse("Not Found", { status: 404 });
}

export const config = {
  matcher: [
    "/keystatic/:path*",
    "/api/keystatic/:path*",
    "/api/inline-edit/:path*",
    "/edit-sections/:path*",
  ],
};
