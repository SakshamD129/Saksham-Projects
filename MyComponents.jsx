import React, { useState } from 'react';

function MyComponents() {
    const [count, setcount] = useState(0);
    const inAge = () => {
        setcount(count => count + 1);
    }

    const deAge = () => {
        setcount(count - 1);
    }

    const reset = () => {
        setcount(0);
    }

    const styling = count > 0 ? "red" : count < 0 ? "blue" : "green";
    return (<div>
        <div>
            <p style={{ backgroundColor: `${styling}`, width: "100px" }}>Name: {count}</p>
            <button onClick={inAge}>Increase</button>
            <button onClick={deAge}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>


    </div>);
}
export default MyComponents