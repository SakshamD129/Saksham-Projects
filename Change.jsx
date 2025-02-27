import React, { useState } from "react";

function Change() {
    const [name, setName] = useState("");
    const [check, setCheck] = useState();
    function handle(event) {
        setName(event.target.value);
    }

    function RadioC(event) {
        setCheck(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handle} />
            <p>Name:{name}</p>
            <label>
                <input type="radio" value="Biralo" onChange={RadioC} checked={check === "Biralo"} />Biralo
                <input type="radio" value="Here" onChange={RadioC} checked={check === "Here"} />Biralu
            </label>
            <p>This: {check}</p>
        </div>
    );
}
export default Change