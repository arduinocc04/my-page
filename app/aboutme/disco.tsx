"use client";

import { DiscoSystem, AnswerType, Speaker} from "@/component/DiscoSystem"

function addDialogues() {
    console.log("Hi");
    DiscoSystem.clear();

    const conceptualization:Speaker = {
        name: "개념화",
        type: "intellect"
    };
    const innerWorld:Speaker = {
        name: "내면세계",
        type: "psyche"
    };
    const halfLight:Speaker = {
        name: "어스름",
        type: "physique"
    };
    const perceptionSmell:Speaker = {
        name: "지각 (후각)",
        type: "motorics"
    }
    DiscoSystem.say(conceptualization, [], "인생은 고달프지마아이아안. 우리는 나아간다아아아아아...", () => {}, "[쉬움: 성공]")
    .say(innerWorld, [], "왜 우리는 이 세상을 등진채... 그저 떠나고, 또 떠나야만 하는거지?", () => {}, "[쉬움: 성공]")
    .say(halfLight, [], "온다. 죽음이", () => {}, "[쉬움: 성공]")
    .say(perceptionSmell, [], "당신이 발견한 껌 종이와 *정확히* 일치하는 냄새예요. 똑같은 껌인가 봐요...", () => {}, "[쉬움: 성공]");

    const tutor:Speaker = {
        name: "튜토리얼",
        type: ""
    }
    DiscoSystem.say(tutor, [], "안녕하세요!", () => {}, "[하찮음: 성공]")
    .say(tutor, [], "반갑습니다.", () => {}, "[하찮음: 성공]")
    .question(tutor, [], "어디로 가시겠습니까?", [
        {
            content: "블로그",
            type: AnswerType.redTry,
            callback: () => {}
        },
        {
            content: "자기소개",
            type: AnswerType.whiteTry,
            callback: () => {}
        },
        {
            content: "프로젝트",
            type: AnswerType.normal,
            callback: () => {}
        }
    ], () => {}, "[하찮음: 성공]")
        .say({name: "1", type: ""}, [], "1", () => {}, "[하찮음: 성공]")
    .newRoute()
        .say({name: "2", type: ""}, [], "2", () => {}, "[하찮음: 성공]")
    .newRoute()
        .say({name: "3", type: ""}, [], "3", () => {}, "[하찮음: 성공]")
}

export default function Dialogue() {
    addDialogues();
    return <div></div>;
}