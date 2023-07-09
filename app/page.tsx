import Image from 'next/image'

export default function Home() {
  return (
    <main className="antialiased flex flex-col min-h-screen dark:bg-gray-900">
        <div className="flex-1">
            <div className="relative dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="px-6 pt-16 lg:pt-28 pb-16 md:pb-24">
                        <h1 className="pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-headline font-black tracking-snug text-center leading-12 sm:leading-15 md:leading-19 lg:leading-26 text-gray-800 dark:text-gray-100">
                            <span>Laugh, and the world laughs with you;</span>
                            <br className="hidden sm:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-200 to-indigo-500">weep, and you weep alone.</span>
                        </h1>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl">
                    <div className="relative pb-6">
                        <div className="relative demo-viewport">
                            <div className="absolute inset-0 -top-0 bg-gradient-to-bl from-sky-400 to-indigo-500 rounded-xl transform -rotate-1 origin-bottom-left"></div>
                            <div className="flex flex-col rounded-lg shadow-xl overflow-hidden h-full bg-gray-900">
                                <div className="flex-grow overflow-y-auto relative z-10">
                                    <Image
                                      src="https://t1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/83p8/image/7C3LpVxmi4RicrGp0aY3zXlrDJE.jpg"
                                      alt="Hello" 
                                      width="1202"
                                      height="513"
                                      />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
