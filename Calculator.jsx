import { useRef } from "react";

function Calculator() {
    const billi = useRef();
    function calculate(value) {
        billi.current.value += value
    }
    function result() {
        billi.current.value = eval(billi.current.value);
    }
    return (
        <>
            <input ref={billi} type="text" />
            <br />
            <button onClick={() => calculate("0")} value={"0"}>0</button>
            <button onClick={() => calculate("1")} value={"1"}>1</button>
            <button onClick={() => calculate("2")} value={"2"}>2</button>
            <br />
            <button onClick={() => calculate("3")} value={"3"}>3</button>
            <button onClick={() => calculate("4")} value={"4"}>4</button>
            <button onClick={() => calculate("5")} value={"5"}>5</button>
            <br />
            <button onClick={() => calculate("6")} value={"6"}>6</button>
            <button onClick={() => calculate("7")} value={"7"}>7</button>
            <button onClick={() => calculate("8")} value={"8"}>8</button>
            <br />
            <button onClick={() => calculate("9")} value={"9"}>9</button>
            <br />
            <button onClick={() => calculate("+")}>+</button>
            <button onClick={() => calculate("-")}>-</button>
            <button onClick={() => calculate("*")}>*</button>
            <button onClick={() => calculate("/")}>/</button>
            <button onClick={result}>=</button>
        </>
    );
}

export default Calculator;