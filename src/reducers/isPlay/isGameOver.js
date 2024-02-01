export const GAME_OVER = "GAME/OVER";

const initialState = {
    isGameOver: false
};

export const isGameOver = (state = initialState, action) => {
    switch (action.type) {
        case GAME_OVER:
            return {
                ...state,
                isGameOver: action.isGameOver
            };
        default:
            return state;
    }
};