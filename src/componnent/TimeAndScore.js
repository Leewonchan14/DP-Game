import {useSelector} from "react-redux";
import TimeController from "./TimeController";

const TimeAndScore = () => {

    let {time} = useSelector((state) => state.Time);
    let {score} = useSelector((state) => state.Score);

    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "30px",
            fontWeight: "bold"
        }}>
            <span><TimeController/></span>
            <span>Time : {time}</span>
            <span>Score : {score}</span>
            <span></span>
        </div>
    )
};

export default TimeAndScore;