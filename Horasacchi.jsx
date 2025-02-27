import React, { useEffect, useRef, useState } from 'react';

function Horasacchi() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("rendered");
        console.log(inputRef);
    }, []);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <input type="text" ref={inputRef} />
        </>
    );
}
export default Horasacchi