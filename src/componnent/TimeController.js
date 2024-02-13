import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GAME_OVER} from "../reducers/GameState/gameState";
import {TIME_DECREASE} from "../reducers/ScoreAndTime/ScoreAndTime";

const TimeController = () => {
    const dispatch = useDispatch();
    const {time} = useSelector((state) => state.ScoreAndTime);
    useEffect(() => {
        // 설정된 시간 간격마다 setInterval 콜백이 실행된다.
        const id = setInterval(() => {
            // 타이머 숫자가 하나씩 줄어들도록
            dispatch({type: TIME_DECREASE})
        }, 1000);

        // Time이 0이 되면 게임오버
        if (time === 0) {
            dispatch({type: GAME_OVER})
            clearInterval(id);
        }
        return () => clearInterval(id);
        // 카운트 변수가 바뀔때마다 useEffecct 실행
    }, [time]);

    return <div></div>;
};

export default TimeController;
