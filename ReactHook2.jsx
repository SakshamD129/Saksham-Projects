import React, { useState, useEffect } from 'react';

function ReactHook2() {


    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleR);
        console.log("Done");

        return () => {
            window.removeEventListener("resize", handleR);
            console.log("removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size:${width} x ${height}`;
    }, [width, height]);


    function handleR() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
        <>
            <p>
                Window Width: {width} px
            </p>
            <p>Window Width: {height} px</p>
        </>
    );

}
export default ReactHook2