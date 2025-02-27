import { useRef, useState } from "react"

function Biralo() {
    const he = useRef();
    const [data, setData] = useState([]);
    const hyy = useRef();
    function Hello() {
        if (he.current.value && he.current.value >= 0) {
            setData(old => [...old,
            <>
                <div>{(hyy.current.value) ? `${hyy.current.value}` : "Hello"}</div>
                <div key={Date.now()} style={{ height: `${he.current.value}px`, border: "1px solid black", width: "40px", backgroundColor: "brown", borderRadius: "10px 10px 0px 0px" }}></div>

            </>])
        }
    }
    return (
        <>
            <input ref={he} type="number" placeholder="Height" />
            <br />
            <input ref={hyy} type="text" placeholder="X-Axis" />
            <button onClick={Hello}>Add</button>
            <div className="cluster-chart">
                <div className="chart-class">
                    {
                        data.map(item => (
                            <div key={Date.now() + item.length}>{item}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
function Chart() {
    return (
        <div className="cluster-chart">
            <div style={{ border: "1px solid black", height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "mediumaquamarine" }}></div>
        </div >
    )
}
export default Chart;
