var initWidth;
if (window.innerWidth <= 376) {
    initWidth = 375;
} else if (window.innerWidth >= 421) {
    initWidth = 420;
} else {
    initWidth = window.innerWidth;
}

const initialState = {
    width: initWidth,
};

export const CHANGE_WIDTH = "WIDTH/CHANGE_WIDTH";

export const width = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WIDTH:
            return {
                ...state,
                width: action.width
            };
        default:
            return state;
    }
};