import { NextResponse, NextRequest } from 'next/server'
import { checkForToken } from './lib/provider/auth-provider'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    let isAuthen = checkForToken(request)

    return NextResponse.next()
}
 
export const config = {
  matcher: [
    "/"
  ],
}