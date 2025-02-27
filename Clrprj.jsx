import React, { useState } from 'react';
function Clrprj() {
    const [color, setColor] = useState('white');
    const Herum = (event) => {
        setColor(event.target.value);
    };
    return (
        <div>
            <p style={{ backgroundColor: `${color}`, width: '250px', height: '250px' }}>This is the think</p>
            <input type="color" onChange={Herum} />
        </div>
    );
}
export default Clrprj