import {useSelector} from "react-redux";
import TimeController from "./TimeController";
import gameStartButton from "./GameStartButton";

const TimeAndScore = ({visible}) => {
    let {score, time} = useSelector((state) => state.ScoreAndTime);

    const gameStartButtonStyle = {
        width: "100%",
        height: "8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "30px",
        fontWeight: "bold"
    }
    if (visible === false) {
        return (
            <div style={gameStartButtonStyle}>
            </div>
        );
    }

    return (
        <div style={gameStartButtonStyle}>
            <TimeController/>
            <span></span>
            <span>Time : {time}</span>
            <span>Score : {score}</span>
            <span></span>
        </div>
    )
};

export default TimeAndScore;