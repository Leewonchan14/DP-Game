import {combineReducers} from "redux";
import {GameState} from "./GameState/gameState";
import {width} from "./MainWidth/width";
import {questions} from "./Questions/Question";
import {ScoreAndTime} from "./ScoreAndTime/ScoreAndTime";

const rootReducer = combineReducers({
    GameState,
    width,
    questions,
    ScoreAndTime,
});

export default rootReducer;