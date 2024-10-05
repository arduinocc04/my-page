import Image from 'next/image'
import "yorha/dist/yorha.css"
import "./styles/added-yorha.css"
import "./styles/layout.css"

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
  return (
    <main className="">
        <div className='yorha-flex'>
            <h1 className="">새로운 집</h1>
            <h2>사이트 제작 이유</h2>
            <ul>
                <li>제가 좋아하는 것들로 저를 소개하고 싶었기 때문입니다.</li>
                <li>제가 만든 프로젝트를 상호작용 가능한 방식으로 소개하고 싶었습니다.</li>
                <li>블로그가 수정되었을 때, 수정된 기록이 잘 남기를 원했습니다.</li>
                <li>LaTeX 문서를 검색이 가능한 형태로 블로그에 바로 올리고 싶었습니다.</li>
            </ul>
            <h2>웹사이트 구조</h2>
            <p>왼쪽 화면은 게임 Nier:Automata의 설정창 디자인을 바탕으로 꾸미고, 오른쪽 화면은 게임 Disco Elysium의 대화창 디자인을 바탕으로 꾸몄습니다.</p>
            <h2>사용한 언어/라이브러리/기술</h2>
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
