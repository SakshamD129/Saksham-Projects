import { useRef, useState } from "react";

function Local() {
    function checking() {
        setData(old => old + 1);
        refee.current.value != "" ? localStorage.setItem(data, refee.current.value) : console.log("biralo");
    }
    const a = [];
    for (let i = 1; i <= localStorage.length; i++) {
        a.push(localStorage.getItem(`${i}`));
    }

    const items = a.map((item, index) => {
        return <div key={index}>{index + 1}:{item}</div>
    })
    const [data, setData] = useState(1);
    const refee = useRef();
    return (
        <>
            <input ref={refee} type="text" />
            <button onClick={checking}>Add</button>
            {items}
        </>
    );
}

export default Local;
