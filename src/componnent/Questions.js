import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import "../App.css";
import {COLLECT, collect} from "../reducers/Questions/isCollect";
import {COLOR_MAP} from "../reducers/AnswerList/AnswerList";

const Questions = () => {
    const questionRef = useRef();

    let color = Object.keys(COLOR_MAP)[Math.floor(Math.random() * 5)];

    let dispatch = useDispatch();

    const [imagePath, setImagePath] = useState("")

    let {questions, question} = useSelector((state) => state.questions);

    // const blink = () => {
    //     const current = question.current;
    //
    //     if (current) {
    //         // Temporarily remove the animation class to reset the animation
    //         current.classList.remove('fade-in');
    //
    //         setTimeout(() => {
    //             current.classList.add('fade-in');
    //         }, 10); // 10ms is a short delay before re-adding the class
    //     }
    // }

    useEffect(() => {
        dispatch({type: "INIT_QUESTION", question: questionRef});
    }, []);

    useEffect(() => {

        if (questions === 2) {
            setImagePath(`rock.png`);
        } else if (questions === 1) {
            setImagePath(`paper.png`)
        } else if (questions === 0) {
            setImagePath(`scissors.png`)
        }

        return () => {
            setImagePath("")
        }
    }, [questions, imagePath]);


    return (
        <div ref={question} className={"fade-in"} style={{
            width: "100%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={{
                width: "60%",
                height: "50%",
                display: "flex",
                fontSize: "50px",
                color: COLOR_MAP[collect],
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                textShadow: "-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black",
            }}>
                {color}
            </div>
        </div>
    )
};

export default Questions;