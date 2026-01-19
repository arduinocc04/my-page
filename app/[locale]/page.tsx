import Image from 'next/image'
import "yorha/dist/yorha.css"
import "../styles/added-yorha.css"
import "../styles/layout.css"

import {useTranslations} from 'next-intl';

import Dialogue from "../disco"

function Tech ({name, link, content}: {name:string, link: string, content: string}) {
    return <figure>
        <figcaption>{name} <a href={link}>website</a> </figcaption>
        <div>
            {content.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    </figure>
}

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="">
        <Dialogue />
        <div className='yorha-flex'>
            <h1 className="">{t('title')}</h1>
            <h2>{t('reason-why')}</h2>
            <ul>
                <li>{t('reasons.0')}</li>
                <li>{t('reasons.1')}</li>
                <li>{t('reasons.2')}</li>
                <li>{t('reasons.3')}</li>
            </ul>
            <h2>{t('structure')}</h2>
            <p>{t('structure-explained')}</p>
            <h2>{t('used-techs')}</h2>
            <Tech
                name='Typescript'
                link='https://www.typescriptlang.org/'
                content=''
            />
            <Tech
                name='Next.js'
                link='https://nextjs.org/'
                content=''
            />
            <Tech
                name='yorha'
                link='https://www.npmjs.com/package/yorha'
                content=''
            />
            <Tech
                name='showdownjs'
                link='https://github.com/showdownjs/showdown'
                content=''
            />
            <Tech
                name='yaml'
                link='https://www.npmjs.com/package/yaml'
                content=''
            />
            <Tech
                name='gray-matter'
                link='https://www.npmjs.com/package/gray-matter'
                content=''
            />
            <Tech
                name='Python'
                link='https://www.python.org/'
                content=''
            />
            <Tech
                name='make4ht'
                link='https://github.com/michal-h21/make4ht'
                content=''
            />
            <Tech
                name='GitHub Action'
                link='https://github.com/features/actions'
                content=''
            />
        </div>
    </main>
  );
}
