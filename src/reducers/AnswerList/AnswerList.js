export const NEXT_ANSWER = "NEXT/ANSWER";

const list = ["빨강", "파랑", "노랑", "초록", "검정"];
// list 에 해당하는 색
export const COLOR_MAP = {
    "빨강": "red",
    "파랑": "blue",
    "노랑": "yellow",
    "초록": "green",
    "검정": "black",
};

const initialState = {
    answerList: list.sort(() => Math.random() - 0.5),
};

export const AnswerList = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_ANSWER:
            return {
                ...state,
                answerList: action.answerList
            };
        default:
            return state;
    }
};