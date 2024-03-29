import './globals.css'
import { Inter } from 'next/font/google'
import  Footer from '../component/Footer'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <div className="dark:bg-gray-900">
          <header className="mx-auto max-w-screen-xl">
            <div className="px-6 py-5 flex items-center space-y-0">
              <div className="flex-grow flex justify-start">
                <a className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" href="/">
                  <p>Daniel Cho</p>
                </a>
              </div>
              <div className="hidden sm:flex items-center justify-center space-x-6 text-base font-medium">
                <a className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" href="/aboutme">About me</a>
                <a className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" href="/projecthome">Projects</a>
                <a className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" href="/bloghome">Blog</a>
              </div>
            </div>
          </header>
        </div>
        {children}
      </body>
      <Footer />
    </html>
  )
}
