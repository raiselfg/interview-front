import { NextRequest, NextResponse } from 'next/server';

import { auth } from './lib/auth/better-auth';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.session && pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (
    session?.session &&
    (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/signup'))
  ) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/auth/login', '/auth/signup'],
};
