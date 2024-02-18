import {useEffect} from "react";

const RestartButton = () => {

    useEffect(() => {
        // 게임오버 로직 추가


    }, [])

    const onClick = () => {
        // 새로고침
        window.location.reload();
    }

    return (
        <div className={"absolute w-full h-full flex justify-center items-center bottom-10"} >
            <button style={{
                width: "200px",
                height: "100px",
                backgroundColor: "#E0F4FF",
                borderRadius: "20px",
                fontSize: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "red"
            }}
                    onClick={onClick}
            >
                다시하기
            </button>
        </div>
    );
};

export default RestartButton;