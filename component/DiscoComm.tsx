"use client";
import "./disco.css"
import {discoInst, Say, Speaker, Question, Answer, AnswerType} from "../component/DiscoSystem"
import React, { ReactNode } from 'react'

interface SayType {
    speaker: Speaker,
    level: string,
    content: string,
    past: boolean
};

interface QuestionsType {
    questions: Array<Answer>,
    thiss: App
}


function SayDiv({speaker, level, content, past}: SayType) {
    return (
        <div className={`say-div ${(past)?"past":""}`}>
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
                    <a key={idx} href="javascript:void(0);" onClick={() => {question.callback(); thiss.addChild(idx)}}>
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

class App extends React.Component<{}, { data: Array<React.JSX.Element> }> {
    private dialogueEnd:any;
    constructor(props:any) {
        super(props);

        this.state = {
            data: []
        };
    }

    addChild = (num:number) => {
        const dialogue:Question|Say = discoInst.next(num);
        let tmp = this.state.data;
        if(tmp.length > 0 && "questions" in tmp[tmp.length - 1].props) { // question
            tmp[tmp.length - 1] = <SayDiv
                content={tmp[tmp.length - 1].props.questions[num].content}
                level=""
                past={false}
                speaker={{
                    name: "나",
                    type: "me"
                }}
                key={tmp.length - 1}
            />
        }

        for(let i = tmp.length - 1; i >= 0; --i) {
            if(tmp[i].props.past) {
                break;
            }

            tmp[i] = <SayDiv content={tmp[i].props.content}
                level={tmp[i].props.level}
                past={true}
                speaker={tmp[i].props.speaker}
                key={i}
                />
        }

        this.setState({data: tmp});

        this.setState(prevState => ({
            data: [...prevState.data,
                <SayDiv
                    content={dialogue.content}
                    level={dialogue.level}
                    speaker={dialogue.speaker}
                    past={false}
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
                <a href="javascript:void(0);" onClick={() => {this.addChild(0)}} ref={(el) => {this.dialogueEnd = el;}}>
                    <div className="disco-block-btn" id="continue-btn">CONTINUE &#62;</div>
                </a>
            </div>
        )
    }

    scrollToBottom = () => {
        this.dialogueEnd.scrollIntoView({behavior: "smooth"});
    }

    componentDidMount(): void {
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ data: Array<React.JSX.Element>; }>, snapshot?: any): void {
        this.scrollToBottom();
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