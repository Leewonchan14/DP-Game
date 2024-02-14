import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import "../App.css";
import "../constants/style.css";

const Questions = () => {
    const questionRef = useRef();

    let dispatch = useDispatch();

    const [imagePath, setImagePath] = useState("")

    let {questions} = useSelector((state) => state.questions);

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
        <div ref={questionRef} className={"fade-in"} style={{
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
                    <img
                        className="image"
                        style={{width: "100%", height: "100%", borderRadius: "20px"}}
                        src={`${process.env.PUBLIC_URL}/${imagePath}`}
                        alt={"가위 바위 보"}
                    />
                </div>

            </div>
        </div>
    )
};

export default Questions;