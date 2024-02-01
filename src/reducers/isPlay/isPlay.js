export const GAME_START = "GAME/START";
export const IS_OVER = "IS/OVER";

const initialState = {
    isPlay: false
};

export const isPlay = (state = initialState, action) => {
    switch (action.type) {
        case GAME_START:
            return {
                ...state,
                isPlay: action.isPlay
            };
        case IS_OVER:
            return {
                ...state,
                isPlay: action.isPlay
            };
        default:
            return state;
    }
};