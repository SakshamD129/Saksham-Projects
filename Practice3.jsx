import { useState } from "react";
import useChange from "./useChnage.jsx";

function Practice3() {
    const [data, setData] = useChange(false);
    return (
        <>
            <p>{data.toString()}</p>
            <button onClick={setData}>Toggle</button>
            <button onClick={() => setData(true)}>True</button>
            <button onClick={() => setData(false)}>False</button>
        </>
    );
}

export default Practice3;
