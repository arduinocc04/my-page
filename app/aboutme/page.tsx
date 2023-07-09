import Image from 'next/image'

export default function Home() {
  return (
    <main className="antialiased flex flex-col min-h-screen dark:bg-gray-900">
        <div className="flex-1">
            <div className="relative dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="px-6 pt-16 lg:pt-28 pb-16 md:pb-24">
                        <h1 className="pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-headline font-black tracking-snug text-center leading-12 sm:leading-15 md:leading-19 lg:leading-26 text-gray-800 dark:text-gray-100">
                            <span>Daniel Cho</span>
                            <br className="block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-200 to-indigo-500">arduinocc04</span>
                        </h1>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl">
                    <div>
                        <h1 className="pl-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-headline font-black">Conact</h1>
                        <div className="pl-10">
                            <a className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400" href="mailto:arduinocc04@gmail.com">arduinocc04@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
