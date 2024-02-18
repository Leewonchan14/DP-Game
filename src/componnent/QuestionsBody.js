import {useDispatch, useSelector} from "react-redux";
import "../App.css";
import "../constants/style.css";
import QuestionBox from "./QuestionBox";
import {INIT, SUMMIT_RIGHT, SUMMIT_WRONG} from "../reducers/Questions/Question";
import {useEffect, useRef} from "react";
import {ADD_SCORE, DECREASE_SCORE} from "../reducers/ScoreAndTime/ScoreAndTime";

const QuestionsBody = () => {

    let {answers, input, doneIndexes, boxChars} = useSelector((state) => state.QuestionState);

    const isTwoChar = input.left !== undefined && input.right !== undefined;

    let dispatch = useDispatch();

    const [bodyRef, leftBox, rightBox]
        = [useRef(undefined), useRef(undefined), useRef(undefined)];

    useEffect(() => {
        dispatch({type: INIT, body: bodyRef, leftBox, rightBox})
    }, []);

    const summit = () => {
        let myInput = boxChars[input.left] + boxChars[input.right];
        // *정답이면 doneIndexes에 추가
        if (answers.includes(myInput)) {
            dispatch({type: SUMMIT_RIGHT})
            dispatch({type: ADD_SCORE})
        } else {
            dispatch({type: SUMMIT_WRONG})
            dispatch({type: DECREASE_SCORE, gap: 1})
        }
    }

    const questionBodyClasses = [
        "w-full",
        "h-full",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
    ];

    const inputBoxClasses = [
        "w-full",
        "flex",
        "justify-evenly",
        "items-center",
    ];

    const buttonClasses = [
        !isTwoChar ? "invisible" : "block",
        "w-1/3",
        "h-20",
        "bg-blue-200",
        "text-black",
        "text-3xl",
        "font-bold",
        "mt-8",
        "rounded-lg",
        "shadow-md",
        "cursor-pointer",
    ];

    return (
        <div className={questionBodyClasses.join(" ")}>
            <div className={"w-auto h-2/5 grid gap-y-2  grid-cols-2 grid-rows-4"}>
                {doneIndexes.map((index, index2) => {
                    return <div className={"flex justify-center items-center text-center text-xl"}>{boxChars[index]}</div>
                })}
            </div>
            <div ref={bodyRef} className={inputBoxClasses.join(" ")}>
                <QuestionBox box={leftBox} index={input.left}/>
                <QuestionBox box={rightBox} index={input.right}/>
            </div>
            <button onClick={summit} className={buttonClasses.join(" ")}>제출</button>
        </div>
    )
};

export default QuestionsBody;