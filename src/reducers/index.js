import {combineReducers} from "redux";
import {isPlay} from "./isPlay/isPlay";
import {width} from "./MainWidth/width";
import {questions} from "./Questions/Question";
import {Time} from "./LifeAndScore/Time";
import {Score} from "./LifeAndScore/Score";
import {isGameOver} from "./isPlay/isGameOver";
import {collect} from "./Questions/isCollect";

const rootReducer = combineReducers({
    isPlay,
    width,
    questions,
    Time,
    Score,
    isGameOver,
    collect
});

export default rootReducer;