import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_SCORE} from "../reducers/LifeAndScore/Score";
import {NEXT_QUESTION, nextQuestion} from "../reducers/Questions/Question";
import {collect, COLLECT} from "../reducers/Questions/isCollect";
import {COLOR_MAP, NEXT_ANSWER} from "../reducers/AnswerList/AnswerList";

const GameButton = ({value}) => {
    const [isClick, setIsClick] = useState()

    const shadowSize = 4;

    let dispatch = useDispatch();

    let {isPlay} = useSelector(state => state.isPlay);

    let {score} = useSelector(state => state.Score);

    let {questions} = useSelector(state => state.questions);

    let {collect} = useSelector(state => state.collect);

    const isClickButton = (value) => {
        console.log(`value: ${value}, collect: ${collect}`)
        if (collect === value) {
            console.log("win");
            dispatch({type: ADD_SCORE, score: score + 1});
            dispatch({
                type: COLLECT,
                collect: Object.keys(COLOR_MAP)[Math.floor(Math.random() * 5)]
            })
            dispatch({type: NEXT_ANSWER, answerList: ["빨강", "파랑", "노랑", "초록", "검정"].sort(() => Math.random() - 0.5)});
        } else {
            console.log("lose");
            dispatch({type: ADD_SCORE, score: (score - 1) > 0 ? score - 1 : 0})
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
                    isPlay && isClickButton(value);
                }}
        >
            {value}
        </button>
    )
};
export default GameButton;