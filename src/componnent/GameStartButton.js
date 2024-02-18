import {useDispatch, useSelector} from "react-redux";

const GameButton = () => {
    
    let dispatch = useDispatch();
    
    return (
        <div className={"absolute w-full h-full flex justify-center items-center bottom-10"} >
            <button style={{width: "200px", height: "100px", backgroundColor: "#E0F4FF", borderRadius: "20px", fontSize: "30px", fontWeight: "bold", cursor: "pointer"}}
                onClick={() => {dispatch({type: "GAME/START", isPlay: true})}}
            >
                게임시작
            </button>
        </div>
    );
};

export default GameButton;