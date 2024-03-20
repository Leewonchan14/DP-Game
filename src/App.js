import './App.css'
import GameButton from "./componnent/GameButton";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import WidthController from "./componnent/WidthController";
import GameStartButton from "./componnent/GameStartButton";
import Questions from "./componnent/Questions";
import TimeAndScore from "./componnent/TimeAndScore";
import RestartButton from "./componnent/RestartButton";

function App() {
    let {isPlay, isGameOver} = useSelector((state) => state.GameState);
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
            }}><span style={{marginRight: "10px", color: "red"}}>지는</span>가위 바위 보
            </div>
            <div style={{width: "100%", height: "86%", display:"flex", flexDirection:"column"}}>
                <TimeAndScore visible={isPlay || isGameOver}/>
                {(!isGameOver && !isPlay && <GameStartButton/>)}
                {isPlay && <Questions/>}
                {isGameOver && <RestartButton/>}
            </div>
            <div style={{width: "100%", height: "100px", display: "flex", justifyContent: "space-between"}}>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton value={2} fileName={"rock.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton value={1} fileName={"paper.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
                <GameButton value={0} fileName={"scissors.png"}/>
                <sizebox style={{width: "auto"}}></sizebox>
            </div>
            <sizebox style={{width: "100%", height: "4%"}}></sizebox>
        </div>
    );
}

export default App;
