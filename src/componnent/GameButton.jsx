import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_SCORE} from "../reducers/LifeAndScore/Score";
import {NEXT_QUESTION, nextQuestion} from "../reducers/Questions/Question";
import {collect, COLLECT} from "../reducers/Questions/isCollect";

const GameButton = ({value, fileName}) => {
    const [isClick, setIsClick] = useState()

    const shadowSize = 4;

    let dispatch = useDispatch();

    let {isPlay} = useSelector(state => state.isPlay);

    let {score} = useSelector(state => state.Score);

    let {questions} = useSelector(state => state.questions);

    let {collect} = useSelector(state => state.collect);

    const isClickButton = (value) => {
        if ((questions + 1) % 3 === value) {
            console.log("win");
            dispatch({type: ADD_SCORE, score: score + 1});
            dispatch({
                    type: NEXT_QUESTION,
                    questions: Math.floor(Math.random() * 3)
                })
            dispatch({type: COLLECT, collect : !collect})
        } else {
            console.log("lose");
            dispatch({type: ADD_SCORE, score: (score - 3) > 0 ? score - 3 : 0})
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