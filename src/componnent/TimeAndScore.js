import {useSelector} from "react-redux";
import TimeController from "./TimeController";

const TimeAndScore = () => {

    let {score, time} = useSelector((state) => state.ScoreAndTime);

    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "30px",
            fontWeight: "bold"
        }}>
            <TimeController/>
            <span></span>
            <span>Time : {time}</span>
            <span>Score : {score}</span>
            <span></span>
        </div>
    )
};

export default TimeAndScore;