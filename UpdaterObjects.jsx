import React, { useState } from 'react';

function Update() {

    const [car, setCar] = useState({
        year: "2024",
        make: "Ford",
        model: "Mustang"
    });
    function HandleYr(event) {
        setCar({ ...car, year: event.target.value });
    }
    function HandleM(event) {
        setCar({ ...car, make: event.target.value });
    }
    function HandleMo(event) {
        setCar({ ...car, model: event.target.value });
    }
    return (
        <div>
            <p>Yur car is :{car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={HandleYr} /><br />
            <input type="text" value={car.make} onChange={HandleM} /><br />
            <input type="text" value={car.model} onChange={HandleMo} /><br />
        </div>
    );
}

export default Update