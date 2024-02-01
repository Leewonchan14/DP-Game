import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import "../App.css";
import {COLLECT, collect} from "../reducers/Questions/isCollect";

const Questions = () => {
    const question = useRef();

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
            width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={{
                width: "60%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E0F4FF",
                borderRadius: "20px",
                boxShadow: "4px 4px 0px rgba(0, 0, 0, 1.25)"
            }}>
                <div style={{
                    width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <img style={{width: "100%", height: "100%", borderRadius: "20px"}}
                         src={`${process.env.PUBLIC_URL}/${imagePath}`}/>
                </div>

            </div>
        </div>
    )
};

export default Questions;