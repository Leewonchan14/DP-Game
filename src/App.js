import './App.css'
import GameButton from "./componnent/GameButton";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import WidthController from "./componnent/WidthController";
import GameStartButton from "./componnent/GameStartButton";
import Questions from "./componnent/Questions";
import TimeAndScore from "./componnent/TimeAndScore";
import TimeController from "./componnent/TimeController";
import RestartButton from "./componnent/RestartButton";
import {COLOR_MAP} from "./reducers/AnswerList/AnswerList";
import MainText from "./componnent/MainText";

function App() {
    let dispatch = useDispatch();

    let {isPlay} = useSelector((state) => state.isPlay);

    let {isGameOver} = useSelector((state) => state.isGameOver);

    let {width} = useSelector((state) => state.width);

    let {answerList} = useSelector((state) => state.AnswerList);

    const RandomColor = () => {
        // return Object.values(COLOR_MAP) 를 무작위로 섞어 리스트 반환
        return Object.values(COLOR_MAP).sort(() => Math.random() - 0.5);
    }
    useEffect(() => {

    }, []);


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
            }}><span>컬러</span>매치
            </div>
            <div style={{width: "100%", height: "86%", display:"flex", flexDirection:"column"}}>
                {(isPlay || isGameOver) ? <TimeAndScore/> : <sizebox style={{width:"100%", height: "10%"}}></sizebox>}
                <MainText />
                {(!isGameOver && !isPlay && <GameStartButton/>)}
                {isPlay && <Questions/>}
                {isGameOver && <RestartButton/>}
            </div>
            <div style={{width: "100%", height: "100px", display: "flex", justifyContent: "center"}}>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton value={answerList[0]} fileName={"rock.png"}/>
                <sizebox style={{width: "10%"}}></sizebox>
                <GameButton value={answerList[1]} fileName={"paper.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
            </div>
            <sizebox style={{width: "auto", height: "50px"}}></sizebox>
            <div style={{width: "100%", height: "100px", display: "flex", justifyContent: "space-between"}}>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton value={answerList[2]} fileName={"rock.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton value={answerList[3]} fileName={"paper.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton value={answerList[4]} fileName={"scissors.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
            </div>
            <sizebox style={{width: "100%", height: "4%"}}></sizebox>
        </div>
    );
}

export default App;
