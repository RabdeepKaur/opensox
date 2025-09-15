import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const adaptedReq = {
    headers: req.headers,
    cookies: req.cookies,
  };
  const token = await getToken({
    req: adaptedReq as any,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const protectedPaths = ["/dashboard/home", "/dashboard/projects", "/dashboard"];
  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      const signInUrl = new URL("/login", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
  return NextResponse.next();
}
