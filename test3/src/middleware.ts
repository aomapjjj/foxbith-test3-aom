import { NextRequest, NextResponse } from "next/server"

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("loggedin")
  let url = req.url
  
  if (
    (!verify && url.includes("/question")) ||
    req.nextUrl.pathname.endsWith('/')
  ) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (
    (verify && url.includes("/login")) ||
    req.nextUrl.pathname.endsWith('/')
  ) {
    return NextResponse.redirect(new URL('/question', req.url))
  }
}
