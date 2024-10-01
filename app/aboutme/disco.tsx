"use client";

import { DiscoSystem, AnswerType} from "@/component/DiscoSystem"

function addDialogues() {
    console.log("Hi");
    DiscoSystem.clear();
    DiscoSystem.say("튜토리얼", [], "안녕하세요!", () => {})
    .say("튜토리얼", [], "반갑습니다.", () => {})
    .question("튜토리얼", [], "어디로 가시겠습니까?", [
        {
            content: "블로그",
            type: AnswerType.normal,
            callback: () => {}
        },
        {
            content: "자기소개",
            type: AnswerType.normal,
            callback: () => {}
        },
        {
            content: "프로젝트",
            type: AnswerType.normal,
            callback: () => {}
        }
    ], () => {})
        .say("1", [], "1", () => {})
    .newRoute()
        .say("2", [], "2", () => {})
    .newRoute()
        .say("3", [], "3", () => {})
}

export default function Dialogue() {
    addDialogues();
    return <div></div>;
}