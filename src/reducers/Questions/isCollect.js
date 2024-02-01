// 정답을 맞추면 다음 문제로 넘어가는 리듀서
export const COLLECT = 'COLLECT';

const initialState = {
    collect: false
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