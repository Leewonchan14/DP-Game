export const ADD_SCORE = "SCORE/ADD_SCORE";

const initialState = {
    score: 0
};

export const Score = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SCORE:
            return {
                ...state,
                score: action.score
            };
        default:
            return state;
    }
};