import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

// Paths that don't require authentication
const publicPaths = [
  '/',
  '/auth/login',
  '/auth/register',
  '/api/auth/login',
  '/api/auth/register',
  '/contact',
  '/terms',
  '/privacy',
  '/help',
  '/about',
  '/how-it-works',
  '/careers',
  '/universities',
  '/cities',
  '/host-guidelines',
  '/host-support'
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the path is public
  if (publicPaths.includes(path)) {
    return NextResponse.next();
  }

  // Check for authentication token
  const token = request.cookies.get('token')?.value;

  if (!token) {
    // Redirect to login if no token is present
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    // Verify the token
    const decoded = await verifyToken(token);
    
    if (!decoded) {
      throw new Error('Invalid token');
    }

    // Add user info to request headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('user', JSON.stringify(decoded));

    // Check role-based access
    if (typeof decoded === 'object' && 'role' in decoded) {
      if (path.startsWith('/dashboard/host') && decoded.role !== 'host') {
        return NextResponse.redirect(new URL('/dashboard/guest', request.url));
      }

      if (path.startsWith('/dashboard/guest') && decoded.role !== 'guest') {
        return NextResponse.redirect(new URL('/dashboard/host', request.url));
      }
    }

    // Continue with the request
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    // Clear invalid token and redirect to login
    const response = NextResponse.redirect(new URL('/auth/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/auth/* (authentication endpoints)
     * 2. /_next/* (Next.js internals)
     * 3. /fonts/* (static font files)
     * 4. /images/* (static image files)
     * 5. /favicon.ico, /site.webmanifest (static files)
     */
    '/((?!api/auth|_next|fonts|images|favicon.ico|site.webmanifest).*)',
  ],
};
