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
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-teal-200 to-indigo-500">arduinocc04</span>
                        </h1>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl">
                    <div>
                        <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">Contact</h1>
                        <div className="pl-10">
                            <a className="text-base sm:text-md md:text-lg lg:text-xl text-gray-500 dark:text-gray-400" href="mailto:arduinocc04@gmail.com">arduinocc04@gmail.com</a>
                            <p className="pl-3 text-base text-gray-600 dark:text-gray-500">PGP Key</p>
                        </div>
                        <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">Interests</h1>
                        <div className="pl-10">
                        <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Game</p>
                        <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Movie</p>
                        <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Music</p>
                        </div>
                        <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">Languages</h1>
                        <div className="pl-10">
                            <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Korean</p>
                            <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">English</p>
                            <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Python</p>
                            <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">C++</p>
                        </div>
                        <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">My Friends</h1>
                        <div className="pl-10">
                            <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">The Big one</h1>
                            <div className="pl-10">
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Arch Linux + KDE</p>
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">AMD Ryzen 5800X</p>
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">DDR4 32GB</p>
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">ASUS TUF GAMING B550-PRO</p>
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">GIGABYTE Geforce RTX 3060 Gaming OC V2 D6 12GB</p>
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Deck Francium Geobukseon-black switch</p>
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Razer DeathAdder Essential</p>
                            </div>
                            <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">The small one</h1>
                            <div className="pl-10">
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Endeavouros + KDE</p>
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">Samsung Galaxy Book Flex2 NT950QDA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
