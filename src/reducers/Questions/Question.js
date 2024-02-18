export const INIT = 'INIT';
export const ADD_CHAR = 'ADD_CHAR';
export const REMOVE_INPUT_BY_INDEX = 'REMOVE_INPUT_BY_INDEX';
export const SUMMIT_RIGHT = 'SUMMIT_RIGHT';
export const SUMMIT_WRONG = 'SUMMIT_WRONG';

const testAnswers = ["결혼", "오렌지", "커피", "거지",]

const initialState = {
    answers: testAnswers,
    input: {
        left: undefined,
        right: undefined,
    },
    boxChars: shuffleAnswers(testAnswers),
    doneIndexes: [],
    body: undefined,
    leftBox: undefined,
    rightBox: undefined,
};

function shuffleAnswers(arr) {
    // *글자 + 1글자로 나누어서 배열로 만든다.
    let flat = arr.map((answer) => {
        let newVar = [...answer];
        return [newVar.splice(0, newVar.length - 1).join(""), ...newVar];
    }).flat();

    return flat.sort(() => Math.random() - 0.5)
}

const effect = (ref, className) => {
    const current = ref.current;

    if (current) {
        // Temporarily remove the animation class to reset the animation
        current.classList.add(className);

        setTimeout(() => {
            current.classList.remove(className);
        }, 500); // 10ms is a short delay before re-adding the class
    }
}

export const QuestionState = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                body: action.body,
                leftBox: action.leftBox,
                rightBox: action.rightBox,
            };
        case ADD_CHAR:
            if (state.input.left === undefined) {
                return {
                    ...state,
                    input: {
                        left: action.index,
                        right: state.input.right,
                    }
                };
            } else if (state.input.right === undefined) {
                return {
                    ...state,
                    input: {
                        left: state.input.left,
                        right: action.index,
                    }
                };
            } else {
                return state;
            }
        case REMOVE_INPUT_BY_INDEX:
            if (state.input.left === action.index) {
                return {
                    ...state,
                    input: {
                        left: undefined,
                        right: state.input.right,
                    }
                };
            } else if (state.input.right === action.index) {
                return {
                    ...state,
                    input: {
                        left: state.input.left,
                        right: undefined,
                    }
                };
            } else {
                return state;
            }
        case SUMMIT_RIGHT:
            // *정답이면 doneIndexes에 추가
            let doneIndexes = [...state.doneIndexes, state.input.left, state.input.right];
            let boxChars = state.boxChars;
            effect(state.leftBox, "green-color");
            effect(state.rightBox, "green-color");


            // *모든 정답을 맞추면
            if (doneIndexes.length === state.answers.length * 2) {
                effect(state.body, "bounce");
                doneIndexes = [];
                shuffleAnswers(state.answers);
                boxChars = shuffleAnswers(state.answers);
            }

            return {
                ...state,
                doneIndexes: doneIndexes,
                boxChars,
                input: {
                    left: undefined,
                    right: undefined,
                }
            }
        case SUMMIT_WRONG:
            effect(state.body, "shake");
            effect(state.leftBox, "red-color");
            effect(state.rightBox, "red-color");

            return {
                ...state,
                input: {
                    left: undefined,
                    right: undefined,
                }
            }
        default:
            return state;
    }
};