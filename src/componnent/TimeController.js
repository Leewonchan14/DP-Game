import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TIME_DECREASE} from "../reducers/LifeAndScore/Time";
import {GAME_OVER, isGameOver} from "../reducers/isPlay/isGameOver";
import {IS_OVER, isPlay} from "../reducers/isPlay/isPlay";

const TimeController = () => {
    const dispatch = useDispatch();
    const {time} = useSelector((state) => state.Time);

    let {isPlay} = useSelector((state) => state.isPlay);

    const [count, setCount] = useState(time);

    useEffect(() => {
        // 설정된 시간 간격마다 setInterval 콜백이 실행된다.
        const id = setInterval(() => {
            // 타이머 숫자가 하나씩 줄어들도록
            setCount((count) => {
                dispatch({type: TIME_DECREASE, time: count - 1})
                return  count - 1;
            });
        }, 1000);

        // 0이 되면 카운트가 멈춤
        if (count === 0) {
            dispatch({type: IS_OVER, isPlay: !isPlay})
            dispatch({type: GAME_OVER, isGameOver: true})
            clearInterval(id);
        }
        return () => clearInterval(id);
        // 카운트 변수가 바뀔때마다 useEffecct 실행
    }, [count]);

    return <div></div>;
};

export default TimeController;
