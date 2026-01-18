import Image from 'next/image'
import Link from 'next/link'
import YAML from 'yaml'
import fs from 'fs'
import "yorha/dist/yorha.css"
import "../../styles/added-yorha.css"
import "../../styles/layout.css"

import Dialogue from "./disco"
import Script from 'next/script'

import {useTranslations} from 'next-intl';

type StringMap = {
    [key: string] : string
};

function Device({device}:{device: StringMap}) {
    const t = useTranslations('aboutme');

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
                <p>{device["system"]}</p>
                {
                    keys.map((key) => (
                        <p key={key}>{t("devname." + key)}: {device[key]}</p>
                    ))
                }
            </div>
        </figure>
    )
}

function parse_yaml(name:string) {
    const file_contents = fs.readFileSync(process.cwd() + "/app/[locale]/aboutme/" + name);
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

  const t = useTranslations('aboutme');

  return (
    <main className="">
        <Dialogue />
        <div className="yorha-flex">
            <h1>{t('info')}</h1>
            <blockquote>
                나아가자, 저 거친 창백 너머로. <br/>
                Off we go into the wild pale yonder
            </blockquote>
            <h2>{t('connecting')}</h2>
            <form>
                <fieldset>
                    <legend>{t('contacts')}</legend>
                    <p>
                        <label htmlFor="text">
                            {t('email')} &nbsp;
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
            <h2>{t('exp')}</h2>
            <h2>{t('interests')}</h2>
            <ul>
                {
                    interests.map((interest:string) => (
                        <li key={interest} >{t("inters." + interest)}</li>
                    ))
                }
            </ul>
            <h2>{t('lang')}</h2>
            {
                languages.map((lang:StringMap) => (
                    <figure key={lang["name"]}>
                        <figcaption>{t("langterms." + lang["name"])}</figcaption>
                        <p>{t("langterms." + lang["level"])}</p>
                        {lang["qualification"] && <p>{t("langterms." + lang["qualification"])}</p>}
                    </figure>
                ))
            }
            <h2>{t('devices')}</h2>
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
