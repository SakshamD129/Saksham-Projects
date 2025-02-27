import { useEffect, useState } from "react";


export default function usePractice() {
    function biralo() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    useEffect(() => {
        console.log(window);
        addEventListener("resize", biralo);
    }, [height, width])
    return [height, width];

}
