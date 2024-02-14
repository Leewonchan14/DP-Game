import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_SCORE, DECREASE_SCORE} from "../reducers/ScoreAndTime/ScoreAndTime";
import {CONVERT_CHAR_TO_COLOR, NEXT_QUESTION, questionState} from "../reducers/Questions/Question";

const GameButton = ({colorChar}) => {
    const [isClick, setIsClick] = useState(false)

    const shadowSize = 4;

    let dispatch = useDispatch();

    let {isPlay = false} = useSelector(state => state.GameState);

    let {questionColor} = useSelector(state => state.questionState);

    const isClickButton = (colorChar) => {
        if (CONVERT_CHAR_TO_COLOR[colorChar] === questionColor) {
            dispatch({type: ADD_SCORE});
            dispatch({type: NEXT_QUESTION});
        } else {
            dispatch({type: DECREASE_SCORE, gap: 1});
        }
    }

    return (
        <button style={{
            backgroundColor: "#E0F4FF",
            width: "100px",
            height: "100px",
            border: "none",
            borderRadius: "10px",
            color: "black",
            fontSize: "25px",
            fontWeight: "bold",
            boxShadow: `${shadowSize * (isClick ? -1 : 1)}px ${shadowSize * (isClick ? -1 : 1)}px 0px rgba(0, 0, 0, 1.0)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
                onMouseDown={() => isPlay && setIsClick(true)}
                onMouseOut={() => isPlay && setIsClick(false)}
                onMouseUp={() => {
                    setIsClick(false);
                    isPlay && isClickButton(colorChar);
                }}
        >
            {colorChar}
        </button>
    )
};
export default GameButton;