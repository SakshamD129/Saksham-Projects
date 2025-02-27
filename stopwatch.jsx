import { useState, useRef, useEffect } from 'react';

function Stopwatch() {
    const [running, setrunning] = useState(false);
    const [elapsed, setelapsed] = useState(0);
    const interval = useRef(null);
    const Start = useRef(0);
    useEffect(() => {
        if (running) {
            interval.current = setInterval(() => {
                setelapsed(Date.now() - Start.current);
            }, 10);
        }
        return () => {
            clearInterval(interval.current);
        }
    }, [running]);

    function run() {
        setrunning(true);
        Start.current = Date.now() - elapsed;
    }
    function stop() {
        setrunning(false);
    }
    function reset() {
        setelapsed(0);
        setrunning(false);
    }
    function formatTime() {
        let hours = Math.floor(elapsed / (1000 * 60 * 60));
        let minutes = Math.floor(elapsed / (1000 * 60) % 60);
        let seconds = Math.floor(elapsed / (1000) % 60);
        let milli = Math.floor(elapsed % 1000);

        return `${hours}:${minutes}:${seconds}:${milli}`;

    }
    return (
        <>
            <div className='stopwatch'>
                <div className='display'>{formatTime()}</div>
                <div className='controls'>
                    <button onClick={run}>start</button>
                    <button onClick={reset}>reset</button>
                    <button onClick={stop}>stop</button>

                </div>
            </div>
        </>
    );

}
export default Stopwatch