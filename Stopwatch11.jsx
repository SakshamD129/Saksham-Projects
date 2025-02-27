import { useEffect, useState } from "react";

function Stopwatch11() {
    const [data, setData] = useState(0);
    const [here, setHere] = useState(false);

    useEffect(() => {
        let intervalID;

        if (here) {
            intervalID = setInterval(() => {
                setData(old => old + 1);
            }, 1000);
        }

        return () => clearInterval(intervalID);
    }, [here]);

    return (
        <div>
            {Math.floor(data / 60)}:{data % 60}
            <br />
            <button onClick={() => setHere(true)}>START</button>
            <button onClick={() => setHere(false)}>Stop</button>
            <button onClick={() => { setHere(false); setData(0); }}>Reset</button>
        </div>
    );
}

export default Stopwatch11;
