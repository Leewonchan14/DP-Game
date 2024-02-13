export const GAME_START = "GAME/START";
export const GAME_OVER = "GAME_OVER";

const initialState = {
    isPlay: false,
    isGameOver: false,
};

export const GameState = (state = initialState, action) => {
    switch (action.type) {
        case GAME_START:
            return {
                ...state,
                isPlay: true,
            };
        case GAME_OVER:
            return {
                ...state,
                isPlay: false,
                isGameOver: true,
            };
        default:
            return state;
    }
};