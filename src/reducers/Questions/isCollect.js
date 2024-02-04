// 정답을 맞추면 다음 문제로 넘어가는 리듀서
import {COLOR_MAP} from "../AnswerList/AnswerList";

export const COLLECT = 'COLLECT';

//COLOR_MAP 의 key중 랜덤 1개
const initialState = {
    collect: Object.keys(COLOR_MAP)[Math.floor(Math.random() * 5)]
};

export const collect = (state = initialState, action) => {
    switch (action.type) {
        case COLLECT:
            return {
                ...state,
                collect: action.collect
            };
        default:
            return state;
    }
};