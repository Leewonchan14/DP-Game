import './App.css'
import GameButton from "./componnent/GameButton";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import WidthController from "./componnent/WidthController";
import GameStartButton from "./componnent/GameStartButton";
import QuestionsBody from "./componnent/QuestionsBody";
import TimeAndScore from "./componnent/TimeAndScore";
import RestartButton from "./componnent/RestartButton";

function App() {
    let {isPlay, isGameOver} = useSelector((state) => state.GameState);
    let {width} = useSelector((state) => state.width);
    let {answers, boxChars} = useSelector((state) => state.QuestionState);

    return (
        <div
            style={{
                height: "100%",
                width: width,
                minWidth: "375px",
                backgroundColor: "white",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                border: "solid 1px black",
            }}>
            <WidthController/>

            <div style={{
                fontSize: "30px",
                fontWeight: "bold",
                width: "100%",
                height: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>알맞은 글자 연결
            </div>
            {(!isGameOver && !isPlay && <GameStartButton/>)}
            <div style={{width: "100%", height: "86%", display: "flex", flexDirection: "column"}}>
                <TimeAndScore visible={isPlay || isGameOver}/>
                <QuestionsBody/>
                {isGameOver && <RestartButton/>}
            </div>
            <div className={"w-full h-80 grid gap-4 grid-cols-4 grid-rows-2 p-2"}>
                {boxChars.map((char, index) => {
                    return <GameButton key={index} index={index} char={char}/>
                })}
            </div>
            <sizebox style={{width: "100%", height: "4%"}}></sizebox>
        </div>
    );
}

export default App;
