import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get('frontsobes.session_token');
  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile'], // Specify the routes the middleware applies to
};
