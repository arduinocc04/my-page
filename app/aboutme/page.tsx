import Image from 'next/image'
import Link from 'next/link'
import YAML from 'yaml'
import fs from 'fs'

function Device({device}:{device: Map<string, string>}) {
    var keys:Array<string> = [];
    const black_keys = new Set(["system", "name", "type"]);
    for(let key in device) {
        if(!black_keys.has(key)) {
            keys.push(key);
        }
    }

    return (
        <div>
            <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">{device["name"]}</h1>
            <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">{device["system"]}</p>
            {
                keys.map((key) => (
                    <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">{key}: {device[key]}</p>
                ))
            }
        </div>
    )
}

function parse_yaml(name:string) {
    const file_contents = fs.readFileSync(process.cwd() + "/app/aboutme/" + name);
    return YAML.parse(file_contents.toString());
}

export default function Home() {
  const interests = parse_yaml("interests.yaml")["interests"];
  const educations = parse_yaml("educations.yaml")["educations"];
  const skill_raw = parse_yaml("skills.yaml");
  const languages = skill_raw["languages"];
  const skills = skill_raw["skills"];
  const devices = parse_yaml("devices.yaml")["devices"];
  const contact_raw = parse_yaml("contacts.yaml");
  const mail = contact_raw["mail"];
  const sites = contact_raw["sites"];

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
                            <span>
                                <a className="text-base sm:text-md md:text-lg lg:text-xl text-gray-500 dark:text-gray-400" href="mailto:arduinocc04@gmail.com">arduinocc04@gmail.com</a>
                            </span>
                            <Link href={"https://keys.openpgp.org/vks/v1/by-fingerprint/370461C8228D5BC295EC772E0CAD8885627310AF"} className="pl-3 text-base text-gray-600 dark:text-gray-500">PGP Key</Link>
                        </div>
                        <div className="pl-10">
                            <a className="text-base sm:text-md md:text-lg lg:text-xl text-gray-500 dark:text-gray-400" href="https://solved.ac/profile/arduinocc04">solvedac: arduinocc04</a>
                        </div>
                        <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">Interests</h1>
                        <div className="pl-10">
                        {
                            interests.map((interest:string) => (
                                <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">{interest}</p>
                            ))
                        }
                        </div>
                        <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">Languages</h1>
                        <div className="pl-10">
                        {
                            languages.map((lang:Map<string, string>) => (
                                <div>
                                    <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">{lang["name"]}</p>
                                    <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">{lang["level"]}</p>
                                    {lang["qualification"] && <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">{lang["qualification"]}</p>}
                                </div>
                            ))
                        }
                        </div>
                        <h1 className="pt-3 pl-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-headline font-black">My Friends</h1>
                        <div className="pl-10">
                            {
                                devices.map((device:Map<string, string>) => (
                                    <Device
                                        device = {device} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
