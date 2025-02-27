import { useRef, useState } from 'react'

function Dice() {
    const leftty = useRef();
    const rightty = useRef();
    const [left, setLeft] = useState();
    const [right, setRight] = useState();
    function Changer() {
        setLeft(Number(Math.floor(Math.random() * 6 + 1)));
        setRight(Number(Math.floor(Math.random() * 6 + 1)));
        leftty.current.style = `${left}`;
        rightty.current.style = `${right}`;
        console.log(left);
        console.log(right);
    }
    return (
        <div>
            <div ref={leftty} className='left-square'>{left}</div>
            <div ref={rightty} className='right-square'>{right}</div>
            <button onClick={Changer}>Roll</button>
        </div >
    )
}

export default Dice
