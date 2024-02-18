import "../constants/style.css";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CHAR, REMOVE_INPUT_BY_INDEX} from "../reducers/Questions/Question";

const GameButton = ({index, char}) => {

    let dispatch = useDispatch();

    let {input, doneIndexes} = useSelector(state => state.QuestionState);

    let {isPlay} = useSelector(state => state.GameState);
    const isClicked = Object.values(input).includes(index);
    const isDone = doneIndexes.includes(index);

    const onClick = () =>{
        if (isClicked) {
            dispatch({type: REMOVE_INPUT_BY_INDEX, index})
        } else{
            dispatch({type: ADD_CHAR, index});
        }
    }

    const notClickedButtonClasses = [
        isDone ? "invisible" : "",
        "w-full",
        "border-2",
        "border-black",
        "rounded-md",
        "shadow-md",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "bg-white",
    ];

    const clickedButtonClasses = [
        isDone ? "invisible" : "",
        "w-full",
        "border-2",
        "border-black",
        "rounded-md",
        "shadow-md",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "bg-green-500",
    ];



    return (
            <button className={!isClicked ? notClickedButtonClasses.join(" ") : clickedButtonClasses.join(" ")} style={{
                // transition: !isClick ? "all 0.5s ease-in-out" : "",
            }} onClick={onClick}>
                <div className={"text-3xl"}>
                    {isPlay ? char : ""}
                </div>
            </button>
    )
};
export default GameButton;