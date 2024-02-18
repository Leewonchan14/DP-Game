import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {REMOVE_INPUT_BY_INDEX} from "../reducers/Questions/Question";

function QuestionBox({box, index, ...rest}) {

    let dispatch = useDispatch();

    let {boxChars} = useSelector((state) => state.QuestionState);

    const onClick = () => {
        if (index === undefined) return;
        dispatch({type: REMOVE_INPUT_BY_INDEX, index});
    }

    const questionBoxClasses = [
        "w-1/3",
        "h-40",
        "flex",
        "justify-center",
        "items-center",
        "border-2",
        "border-black",
        "rounded-lg",
        "bg-white",
        "shadow-lg",
        "cursor-pointer"
    ];

    const testClasses = [
        "text-4xl",
        "font-bold",
    ];

    return (
        <div ref={box} onClick={onClick} className={questionBoxClasses.join(" ")}>
            <span className={testClasses.join(" ")}>
                {boxChars[index]}
            </span>
        </div>
    );
}

export default QuestionBox;