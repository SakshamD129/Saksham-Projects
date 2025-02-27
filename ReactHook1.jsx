import React, { useState, useEffect } from 'react';

function ReactHook1() {

    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("green");

    useEffect(() => {
        document.title = `Count:${count} ${colour}`;
        return () => {
            // cleanup

        }
    }, [count, colour]);

    function addCount() {
        setCount(count + 1);
    }
    function subCount() {
        setCount(count - 1);
    }
    function changeColour() {
        setColour(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: colour }}>Count:{count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button>
            <br />
            <button onClick={changeColour}>Colour</button>
        </>
    );

}
export default ReactHook1