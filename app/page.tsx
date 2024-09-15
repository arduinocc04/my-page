import Image from 'next/image'

export default function Home() {
  return (
    <main className="antialiased flex flex-col min-h-screen dark:bg-gray-900">
        <div className="flex-1">
            <div className="relative dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="px-6 pt-16 lg:pt-28 pb-16 md:pb-24">
                        <h1 className="pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-headline font-black tracking-snug text-center leading-12 sm:leading-15 md:leading-19 lg:leading-26 text-gray-800 dark:text-gray-100">
                            <span>Daniel Cho&apos;s Cradle</span>
                            <br className="hidden sm:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-200 to-indigo-500">Made with</span>
                        </h1>
                        <h1 className="pb-6 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-headline font-black tracking-snug text-center leading-12 sm:leading-15 md:leading-19 lg:leading-26 text-gray-800 dark:text-gray-100">
                            <span>Next Js</span>
                            <br className="hidden sm:block"/>
                            <span>tailwindcss</span>
                            <br className="hidden sm:block"/>
                            <span>Showdown Js</span>
                            <br className="hidden sm:block"/>
                            {/*
                                <span>LaTeX Js</span>
                            <br className="hidden sm:block"/>*/
                            }
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
