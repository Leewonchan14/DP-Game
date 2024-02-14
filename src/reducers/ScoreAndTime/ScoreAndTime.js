export const ADD_SCORE = "SCORE/ADD_SCORE";
export const DECREASE_SCORE = "SCORE/DECREASE_SCORE";
export const TIME_DECREASE = "TIME/DECREASE";

const initialState = {
    score: 0,
    time: 30
};

export const ScoreAndTime = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SCORE:
            return {
                ...state,
                score: state.score + 1
            };
        case DECREASE_SCORE:
            let diff = state.score - action.gap;
            return {
                ...state,
                score: diff > 0 ? diff : 0,
            };
        case TIME_DECREASE:
            return {
                ...state,
                time: state.time - 1
            };
        default:
            return state;
    }
};