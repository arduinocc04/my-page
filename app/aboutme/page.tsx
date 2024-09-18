import Image from 'next/image'
import Link from 'next/link'
import YAML from 'yaml'
import fs from 'fs'
import "yorha/dist/yorha.css"
import "../styles/added-yorha.css"
import "../styles/layout.css"


type StringMap = {
    [key: string] : string
};

function Device({device}:{device: StringMap}) {
    var keys:Array<string> = [];
    const black_keys = new Set(["system", "name", "type"]);
    for(let key in device) {
        if(!black_keys.has(key)) {
            keys.push(key);
        }
    }

    return (
        <figure>
            <figcaption>{device["name"]}</figcaption>
            <div>
                <p >{device["system"]}</p>
                {
                    keys.map((key) => (
                        <p key={key}>{key}: {device[key]}</p>
                    ))
                }
            </div>
        </figure>
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
    <main className="">
        <div className="aboutme-flex">
            <h1>정보</h1>
            <blockquote>
                나아가자, 저 거친 창백 너머로. <br/>
                Off we go into the wild pale yonder
            </blockquote>
            <h2>연락</h2>
            <form>
                <fieldset>
                    <legend>연락처</legend>
                    <p>
                        <label htmlFor="text">
                            이메일 &nbsp;
                            <a href={mail["pgp_link"]}>PGP</a>
                        </label>
                        <br/>
                        <input type="text" id="text" className='full' value={mail["address"]} readOnly/>
                    </p>
                    {
                        sites.map((site:StringMap) => (
                            <p key={site["name"]}>
                                <label htmlFor="text">
                                    {site["name"]}
                                </label>
                                <br/>
                                <a href={site["link"]}>
                                    <input type="text" id="text" className='full' value={site["handle"]} readOnly/>
                                </a>
                            </p>
                        ))
                    }
                </fieldset>
            </form>
            <h2>이력</h2>
            <h2>관심사</h2>
            <ul>
                {
                    interests.map((interest:string) => (
                        <li key={interest} >{interest}</li>
                    ))
                }
            </ul>
            <h2>언어</h2>
            {
                languages.map((lang:StringMap) => (
                    <figure key={lang["name"]}>
                        <figcaption>{lang["name"]}</figcaption>
                        <p>{lang["level"]}</p>
                        {lang["qualification"] && <p>{lang["qualification"]}</p>}
                    </figure>
                ))
            }
            <h2>친구들</h2>
            {
                devices.map((device:StringMap) => (
                    <Device
                        device = {device}
                        key = {device["name"]} />
                ))
            }
        </div>
    </main>
  );
}
