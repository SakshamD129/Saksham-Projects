import { useEffect, useReducer, useRef } from "react"
const initialdata = 0;
function PracticeHello() {
    function reducer(data, action) {
        if (action.type === "deposit") {
            return data + Number(savings.current.value);
        }
        else if (action.type === "cash") {
            if (data - Number(css.current.value) >= 0) {

                return data - Number(css.current.value);
            }
            else {
                alert("Not sufficient!");
                return data;
            }
        }
        else {
            return data;
        }
    }
    const savings = useRef();
    const css = useRef();
    const previous = useRef(0);
    const [data, dispatch] = useReducer(reducer, initialdata);
    useEffect(() => {
        previous.current = data;
    }, [data])
    return (
        <>
            <div className="balances">
                <div>Previous Balance:{previous.current}</div>
                <div>Current Balance:{data}</div>
            </div>
            <div className="hunekura">
                <input className="byutton" ref={savings} type="number" placeholder="Deposit Amount" />
                <button className="reality" onClick={() => dispatch({ type: "deposit" })}>Deposit</button>
                <br />
                <input className="byutton" ref={css} type="number" placeholder="Cash out" />
                <button className="reality" onClick={() => dispatch({ type: "cash" })}>Cash out</button>
            </div>
        </>
    )
}

export default PracticeHello
