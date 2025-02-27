import React, { useMemo, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    function increment() {
        setCount(prev => prev + 1);
    }
    function increment1() {
        setValue(prev => prev + 1);
    }

    const computedValue = useMemo(() => doubleValue(count), [count]);

    return (
        <>
            <button onClick={increment}>Click Me</button>
            <p>Count: {count} | Computed: {computedValue}</p>
            <button onClick={increment1}>Add</button>
            <p>{value}</p>
        </>
    );
}

function doubleValue(num) {
    console.log("Rendering");
    return num * 2;
}
