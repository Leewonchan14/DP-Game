import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import "../App.css";
import {COLLECT, collect} from "../reducers/Questions/isCollect";
import {COLOR_MAP} from "../reducers/AnswerList/AnswerList";

const Questions = () => {
    const question = useRef();

    let color = Object.keys(COLOR_MAP)[Math.floor(Math.random() * 5)];

    const [imagePath, setImagePath] = useState("")

    let {questions} = useSelector((state) => state.questions);

    let {collect} = useSelector((state) => state.collect);

    const blink = () => {
        const current = question.current;

        if (current) {
            // Temporarily remove the animation class to reset the animation
            current.classList.remove('fade-in');

            // Using setTimeout to re-add the class ensures the browser has acknowledged the removal.
            // This is a common trick to restart a CSS animation.
            setTimeout(() => {
                current.classList.add('fade-in');
            }, 10); // 10ms is a short delay before re-adding the class
        }
    }

    useEffect(() => {

        blink();

        if (questions === 2) {
            setImagePath(`rock.png`);
        } else if (questions === 1) {
            setImagePath(`paper.png`)
        } else if (questions === 0) {
            setImagePath(`scissors.png`)
        }

    }, [questions, imagePath, collect]);


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