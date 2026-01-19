import localFont from 'next/font/local'
import Disco from '@/component/DiscoComm'
import "../styles/layout.css"
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const nanumGothic = localFont({
  src: [
    {
      path: "./font/NanumGothic.ttf",
      weight: "400"
    },
    {
      path: "./font/NanumGothicBold.ttf",
      weight: "700"
    },
    {
      path: "./font/NanumGothicExtraBold.ttf",
      weight: "800"
    }
  ]
});

const nanumMyeongjo = localFont({
  src: [
    {
      path: "./font/NanumMyeongjo.ttf",
      weight: "400"
    },
    {
      path: "./font/NanumMyeongjoBold.ttf",
      weight: "700"
    },
    {
      path: "./font/NanumMyeongjoExtraBold.ttf",
      weight: "800"
    }
  ]
})
export const metadata = {
  title: 'Daniel\'s Cradle',
  description: 'Daniel\'s Cradle',
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({children, params}: Props) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html>
      <body className="">
        <NextIntlClientProvider>
          <div className="main-wrapper">
            <div className={`${nanumGothic.className} main-yorha`} style={{fontWeight: "normal"}}>
              {children}
            </div>
            <div className={`${nanumMyeongjo.className} main-disco`} style={{fontWeight: "normal"}}>
              <Disco />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
