import localFont from 'next/font/local'
import Disco from '@/component/DiscoComm'
import "./styles/layout.css"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="">
        <div className="main-wrapper">
          <div className={`${nanumGothic.className} main-yorha`} style={{fontWeight: "normal"}}>
            {children}
          </div>
          <div className={`${nanumMyeongjo.className} main-disco`} style={{fontWeight: "normal"}}>
            <Disco />
          </div>
        </div>
      </body>
    </html>
  )
}
