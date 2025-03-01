import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
    const session = await getSessionCookie(request);
    const cookiesStore = await cookies();
    const isLogin = cookiesStore.get('isisman-auth');

    const publicPaths = ['/sign-in', '/sign-up', '/forgot-password'];
    const { pathname } = request.nextUrl;

    if (session && isLogin && publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/app/dashboard", request.url));
    }

    if (!session && !isLogin && pathname.startsWith('/app')) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};