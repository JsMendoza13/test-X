import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";
//esto es una opcion de Next.js, para evistar que cache de forma estatica la ruya 
//y que siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if(code != null){
        const supabase = createRouteHandlerClient({cookies})
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}