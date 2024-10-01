"use client";
import "./disco.css"
import {discoInst} from "../component/DiscoSystem"

interface SayType {
    name: string,
    speakerClass: string,
    level: string,
    content: string,
};

interface QuestionsType {
    questions: Array<string>
};

function Say({name, speakerClass, level, content}: SayType) {
    return (
        <div>
            <span className="say">
                <span className={`speaker ${speakerClass}`}>{name}</span>
                <span className="say-level">&nbsp;{level}</span>
                &nbsp;–&nbsp;{content}
            </span>
        </div>
    )
}

function Question({questions}:QuestionsType) {
    return (
        <div>
            {
                questions.map((question, idx) => (
                    <div key={idx}>
                        <span className="say">
                            <span className="speaker">{idx + 1}.</span>
                            &nbsp;–&nbsp;
                            <span className="question">
                            {question}
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default function Disco() {
    return (
        <div className="disco-wrapper">
            <div className="disco-outline left"/>
            <div className="disco-main">
                <Say
                    name="개념화"
                    speakerClass="intellect"
                    level="[쉬움: 성공]"
                    content="인생은 고달프지마아이아안. 우리는 나아간다아아아아아..."
                />
                <Say
                    name="내면세계"
                    speakerClass="psyche"
                    level="[쉬움: 성공]"
                    content="왜 우리는 이 세상을 등진채... 그저 떠나고, 또 떠나야만 하는거지?"
                />
                <Say
                    name="어스름"
                    speakerClass="physique"
                    level="[쉬움: 성공]"
                    content="온다. 죽음이"
                />
                <Say
                    name="지각 (후각)"
                    speakerClass="motorics"
                    level="[하찮음: 성공]"
                    content="당신이 발견한 껌 종이와 *정확히* 일치하는 냄새예요. 똑같은 껌인가 봐요..."
                />
                <Say
                    name="CPU"
                    speakerClass=""
                    level=""
                    content="어디로 가시겠습니까?"
                />
                <Question
                    questions={["이력", "블로그", "프로젝트"]}
                />
            </div>
            <div className="disco-outline right"/>
        </div>
    )
    // return (<button onClick={() => {discoInst.next(0)}}>next</button>);
}