import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_WIDTH} from "../reducers/MainWidth/width";

const WidthController = () => {
    let dispatch = useDispatch();

    let widthState = useSelector((state) => state.width);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth === widthState) return;

            let width = window.innerWidth;

            if (window.innerWidth >= 421 && window.innerWidth <= 768) {
                width = 420;
            }
            if (window.innerWidth <= 376) {
                width = 375;
            } else if (window.innerWidth >= 421) {
                width = 420;
            } else {
                width = window.innerWidth;
            }
            dispatch({type: CHANGE_WIDTH, width: width});
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [widthState]);

    return <></>
}

export default WidthController;