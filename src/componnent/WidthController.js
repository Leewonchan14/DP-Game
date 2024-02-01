import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_WIDTH} from "../reducers/MainWidth/width";

const WidthController = () => {
    let dispatch = useDispatch();

    let width = useSelector((state) => state.width);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth === width) return;

            if (window.innerWidth >= 421 && window.innerWidth <= 768) {
                dispatch({type: CHANGE_WIDTH, width: 420})
            }
            if (window.innerWidth <= 376) {
                dispatch({type: CHANGE_WIDTH, width: 375})
            } else if (window.innerWidth >= 421) {
                dispatch({type: CHANGE_WIDTH, width: 420})
            } else {
                dispatch({type: CHANGE_WIDTH, width: window.innerWidth})
            }
        }
        window.addEventListener('resize', handleResize)
    }, []);

    return <div></div>
}

export default WidthController;