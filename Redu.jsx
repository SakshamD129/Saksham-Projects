import { useReducer, useRef, useState } from "react";

function reducer(state, action) {
    console.log(state);
    if (action.type === "increment") {
        return { num: state.num + 1 };
    } else if (action.type === "decrement") {
        return { num: state.num - 1 };
    } else {
        return state;
    }
}

const initialValue = { num: 0 };

function Redu() {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const data = useRef(0);
    const [, forceRender] = useState(0);
    function Really() {
        data.current = data.current + 1;
        console.log(data.current);
        forceRender((prev) => prev + 1);
    }

    return (
        <div>
            <h1>{state.num}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
            <p>{data.current}</p>
            <button onClick={Really}>Here</button>
        </div>
    );
}

export default Redu;
