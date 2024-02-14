import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_SCORE, DECREASE_SCORE} from "../reducers/ScoreAndTime/ScoreAndTime";
import {NEXT_QUESTION} from "../reducers/Questions/Question";

const GameButton = ({value, fileName}) => {
    const [isClick, setIsClick] = useState()

    const shadowSize = 4;

    let dispatch = useDispatch();

    let {isPlay = false} = useSelector(state => state.GameState);

    let {questions} = useSelector(state => state.questions);

    const isClickButton = (value) => {
        if ((questions + 1) % 3 === value) {
            dispatch({type: ADD_SCORE});
            dispatch({type: NEXT_QUESTION})
        } else {
            dispatch({type: DECREASE_SCORE, gap: 3})
        }
    }

    return (
        <button style={{
            backgroundColor: "#E0F4FF",
            width: "100px",
            height: "100px",
            border: "none",
            borderRadius: "10px",
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
                    isPlay && isClickButton(value);
                }}
        >
            <div style={{
                width: fileName === "rock.png" ? "65%" : "80%",
                height: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={`${process.env.PUBLIC_URL}/${fileName}`}
                     style={{width: "100%", height: "100%", objectFit: "contain"}} alt={"z"}/>
            </div>
        </button>
    )
};
export default GameButton;