// 정답을 맞추면 다음 문제로 넘어가는 리듀서
export const NEXT_QUESTION = 'NEXT_QUESTION';

const initialState = {
    questions: Math.floor(Math.random() * 3)
};

export const questions = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_QUESTION:
            return {
                ...state,
                questions: action.questions
            };
        default:
            return state;
    }
};