"use client";
import "./disco.css"
import {discoInst, Say, Speaker, Question, Answer, AnswerType} from "../component/DiscoSystem"
import React, { ReactNode } from 'react'

interface SayType {
    speaker: Speaker,
    level: string,
    content: string,
};

interface QuestionsType {
    questions: Array<Answer>,
    thiss: App
}


function SayDiv({speaker, level, content}: SayType) {
    return (
        <div className="say-div">
            <span className="say">
                <span className={`speaker ${speaker.type}`}>{speaker.name}</span>
                <span className="say-level">&nbsp;{level}</span>
                &nbsp;–&nbsp;{content}
            </span>
        </div>
    )
}

function Questions({questions, thiss}:QuestionsType) {
    return (
        <div className="say-div">
            {
                questions.map((question, idx) => (
                    <a key={idx} href="javascript:void(0);" onClick={() => {thiss.addChild(idx)}}>
                        <div className={(question.type == AnswerType.normal)?"normal-q":(question.type == AnswerType.whiteTry)?"white-try":"red-try"}>
                            <span>
                                <span className="speaker">{idx + 1}.&nbsp;–&nbsp;</span>
                                {question.content}
                            </span>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    getInitialState() {
        return {data:[]};
    }

    addChild = (num:number) => {
        const dialogue:Question|Say = discoInst.next(num);
        this.setState(prevState => ({
            data: [...prevState.data,
                <SayDiv
                    content={dialogue.content}
                    level={dialogue.level}
                    speaker={dialogue.speaker}
                />
            ]
        }));

        if("answers" in dialogue) {
            this.setState(prevState => ({
                data: [...prevState.data,
                    <Questions
                        questions={dialogue.answers}
                        thiss={this}
                    />
                ]
            }));
        }
    }

    render() {
        return (
            <div className="disco-dialogue">
                {
                    this.state.data.map((item, idx) => (
                        <div key={idx}>
                            {item}
                        </div>
                    ))
                }
                <a href="javascript:void(0);" onClick={() => {this.addChild(0)}}>
                    <div className="disco-block-btn" id="continue-btn">CONTINUE &#62;</div>
                </a>
            </div>
        )
    }
}

export default function Disco() {
    return (
        <div className="disco-wrapper">
            <div className="disco-outline left"/>
            <div className="disco-main">
                <App/>
            </div>
            <div className="disco-outline right"/>
        </div>
    )
    // return (<button onClick={() => {discoInst.next(0)}}>next</button>);
}