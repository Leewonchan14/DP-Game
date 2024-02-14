import {combineReducers} from "redux";
import {GameState} from "./GameState/gameState";
import {width} from "./MainWidth/width";
import {questionState} from "./Questions/Question";
import {ScoreAndTime} from "./ScoreAndTime/ScoreAndTime";

const rootReducer = combineReducers({
    GameState,
    width,
    questionState,
    ScoreAndTime,
});

export default rootReducer;