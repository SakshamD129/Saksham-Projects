import { useReducer } from "react"

function reducer(value, action) {
    console.log(value);
    console.log(action);
    if (action.type == "increment") {
        return value = value + 1
    }
}
const initialValue = 0;
function Testing() {

    const [value, dispatch] = useReducer(reducer, initialValue);
    console.log(dispatch);
    return (

        <div className='birallo'>
            <button onClick={() => dispatch({ type: "increment" })}>Addition</button>
            <p>{value}</p>
        </div >
    )
}
export default Testing
