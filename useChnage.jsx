import { useState } from "react";

export default function useChange(initialValue) {
    const [data, setData] = useState(initialValue);

    // This function squares the current value of data and updates it
    function squareData(value) {
        setData(value ** 2);  // Set the squared value
    }

    return [data, squareData];
}
