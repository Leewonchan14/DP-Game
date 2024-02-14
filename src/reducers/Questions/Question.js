// 정답을 맞추면 다음 문제로 넘어가는 리듀서
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const INIT_QUESTION = 'INIT_QUESTION';

const initialState = {
    questions: Math.floor(Math.random() * 3),
    question: null,
};

const blink = (question) => {
    const current = question.current;

    if (current) {
        // Temporarily remove the animation class to reset the animation
        current.classList.remove('fade-in');

        setTimeout(() => {
            current.classList.add('fade-in');
        }, 10); // 10ms is a short delay before re-adding the class
    }

}

export const questions = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_QUESTION:
            blink(state.question);
            return {
                ...state,
                questions: Math.floor(Math.random() * 3)
            };
        case INIT_QUESTION:
            return {
                ...state,
                question: action.question
            };
        default:
            return state;
    }
};