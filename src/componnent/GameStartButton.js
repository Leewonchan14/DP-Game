import {useDispatch, useSelector} from "react-redux";

const GameButton = () => {
    
    let dispatch = useDispatch();
    
    let {isPlay} = useSelector((state) => state.GameState);
    
    return (
        <div style={{width: "100%", height: "80%", display: "flex", flexDirection:"column",  justifyContent: "center", alignItems:"center"}}>
            <button style={{width: "200px", height: "100px", backgroundColor: "#E0F4FF", borderRadius: "20px", fontSize: "30px", fontWeight: "bold", cursor: "pointer"}}
                onClick={() => {dispatch({type: "GAME/START", isPlay: true})}}
            >
                게임시작
            </button>
        </div>
    );
};

export default GameButton;