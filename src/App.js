import './App.css'
import GameButton from "./componnent/GameButton";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import WidthController from "./componnent/WidthController";
import GameStartButton from "./componnent/GameStartButton";
import Questions from "./componnent/Questions";
import TimeAndScore from "./componnent/TimeAndScore";
import RestartButton from "./componnent/RestartButton";
import MainText from "./componnent/MainText";

function App() {
    let {isPlay, isGameOver} = useSelector((state) => state.GameState);
    let {/*questionsChar, questionColor, */answerCharList} = useSelector((state) => state.questionState);
    let {width} = useSelector((state) => state.width);

    return (
        <div
            style={{
                height: "100%",
                width: width,
                minWidth: "375px",
                backgroundColor: "white",
                display: "flex",
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
            }}>
                <span>컬러</span>매치
            </div>
            <div style={{width: "100%", height: "86%", display: "flex", flexDirection: "column"}}>
                {(isPlay || isGameOver) ? <TimeAndScore/> : <sizebox style={{width: "100%", height: "10%"}}></sizebox>}
                <MainText/>
                {(!isGameOver && !isPlay && <GameStartButton/>)}
                {isPlay && <Questions/>}
                {isGameOver && <RestartButton/>}
            </div>
            <div style={{width: "100%", height: "100px", display: "flex", justifyContent: "center"}}>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton colorChar={answerCharList[0]} fileName={"rock.png"}/>
                <sizebox style={{width: "10%"}}></sizebox>
                <GameButton colorChar={answerCharList[1]} fileName={"paper.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
            </div>
            <sizebox style={{width: "auto", height: "50px"}}></sizebox>
            <div style={{width: "100%", height: "100px", display: "flex", justifyContent: "space-between"}}>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton colorChar={answerCharList[2]} fileName={"rock.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton colorChar={answerCharList[3]} fileName={"paper.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton colorChar={answerCharList[4]} fileName={"scissors.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
            </div>
            <sizebox style={{width: "100%", height: "4%"}}></sizebox>
        </div>
    );
}

export default App;
