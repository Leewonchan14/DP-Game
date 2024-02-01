export const TIME_DECREASE = "TIME/DECREASE";

const initialState = {
    time: 30
};

export const Time = (state = initialState, action) => {
    switch (action.type) {
        case TIME_DECREASE:
            return {
                ...state,
                time: action.time
            };
        default:
            return state;
    }
};