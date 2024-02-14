import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import "../App.css";
import {INIT_QUESTION} from "../reducers/Questions/Question";

const Questions = () => {
    const questionRef = useRef();

    let dispatch = useDispatch();

    let {questionChar, questionColor} = useSelector((state) => state.questionState);

    useEffect(() => {
        dispatch({type: INIT_QUESTION, question: questionRef});
    }, []);

    return (
        <div ref={questionRef} className={"fade-in"} style={{
            width: "100%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={{
                width: "60%",
                height: "50%",
                display: "flex",
                fontSize: "50px",
                color: questionColor,
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                textShadow: "-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black",
            }}>
                {questionChar}
            </div>
        </div>
    )
};

export default Questions;