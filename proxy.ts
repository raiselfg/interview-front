import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/auth/actions/get-session';

export async function proxy(request: NextRequest) {
  const data = await getSession();
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!data.session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile'], // Specify the routes the middleware applies to
};
