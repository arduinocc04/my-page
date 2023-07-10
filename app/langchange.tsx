'use Client';
import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'

export function set_lang_en(request: NextRequest) {
    var d = new Date();
    cookies().set("NEXT_LOCALE", "en", {expires: new Date(d.getFullYear() + 1, d.getMonth(), d.getDate())});
  }
  
export function set_lang_ko(request: NextRequest) {
    var d = new Date();
    cookies().set("NEXT_LOCALE", "ko", {expires: new Date(d.getFullYear() + 1, d.getMonth(), d.getDate())});
}

export function lang_set_button() {
    return(
        <div>
            <button onClick={() => {set_lang_ko}}>
            한국어
            </button>
            <button onClick={() => {set_lang_en}}>
            English
            </button>
        </div>
    )
}