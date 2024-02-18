import {combineReducers} from "redux";
import {GameState} from "./GameState/gameState";
import {width} from "./MainWidth/width";
import {QuestionState} from "./Questions/Question";
import {ScoreAndTime} from "./ScoreAndTime/ScoreAndTime";

const rootReducer = combineReducers({
    GameState,
    width,
    QuestionState,
    ScoreAndTime,
});

export default rootReducer;