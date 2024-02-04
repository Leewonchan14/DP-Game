import {combineReducers} from "redux";
import {isPlay} from "./isPlay/isPlay";
import {width} from "./MainWidth/width";
import {questions} from "./Questions/Question";
import {Time} from "./LifeAndScore/Time";
import {Score} from "./LifeAndScore/Score";
import {isGameOver} from "./isPlay/isGameOver";
import {collect} from "./Questions/isCollect";
import {AnswerList} from "./AnswerList/AnswerList";

const rootReducer = combineReducers({
    isPlay,
    width,
    questions,
    Time,
    Score,
    isGameOver,
    collect,
    AnswerList
});

export default rootReducer;