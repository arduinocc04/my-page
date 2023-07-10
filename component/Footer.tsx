"use client";
export default function Footer() {
    const change_locale = (locale:string) => {
        var d = new Date();
        var a = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
        document.cookie = "NEXT_LOCALE=" + locale + "; expires=" + a.toUTCString();
    };

    const change_locale_to_ko = () => {
        change_locale('ko');
        location.reload();
    };
    
    const change_locale_to_en = () => {
        change_locale('en');
        location.reload();
    };

    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="mx-auto max-w-screen-xl">
                <div className="px-10 sm:px-6 py-20">
                    <div className="mx-auto max-w-screen-xl">
                        <div className="px-6 py-5 flex items-center space-y-0">
                            <div className="flex-grow flex justify-start">
                                <p className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                                <p>Daniel Cho.</p>
                                </p>
                            </div>
                            <div className="flex items-center justify-center space-x-6 text-base font-medium">
                                <button onClick={change_locale_to_ko}>
                                    한국어
                                </button>
                                <br/>
                                <button onClick={change_locale_to_en}>
                                    English
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
