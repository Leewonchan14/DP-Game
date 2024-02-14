// 정답을 맞추면 다음 문제로 넘어가는 리듀서
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const INIT_QUESTION = 'INIT_QUESTION';

const list = ["빨강", "파랑", "노랑", "초록", "검정"];

export const CONVERT_CHAR_TO_COLOR = {
    "빨강": "red",
    "파랑": "blue",
    "노랑": "yellow",
    "초록": "green",
    "검정": "black",
};

const randomColor = () => {
    return CONVERT_CHAR_TO_COLOR[list[Math.floor(Math.random() * 5)]];
}
const randomChar = () => {
    return list[Math.floor(Math.random() * 5)];
}

const shuffleAnswerCharList = () => {
    return list.sort(() => Math.random() - 0.5);
}

const initialState = {
    questionChar: randomChar(),
    questionColor: randomColor(),
    answerCharList: shuffleAnswerCharList(),
    questionRef: null,
};

const blink = ({current}) => {
    if (current) {
        // Temporarily remove the animation class to reset the animation
        current.classList.remove('fade-in');

        setTimeout(() => {
            current.classList.add('fade-in');
        }, 10); // 10ms is a short delay before re-adding the class
    }
}

export const questionState = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_QUESTION:
            blink(state.questionRef);
            return {
                ...state,
                questionChar: randomChar(),
                questionColor: randomColor(),
                answerCharList: shuffleAnswerCharList(),
            };
        case INIT_QUESTION:
            return {
                ...state,
                questionRef: action.question
            };
        default:
            return state;
    }
};