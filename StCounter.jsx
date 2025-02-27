import Zpractice from './Zpractice.jsx';
function StCounter() {
    const { count, increase, decrease, tggle, toggle } = Zpractice();
    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>Add</button>
            <button onClick={decrease}>Sub</button>
            <br />
            <button onClick={toggle}>Checker</button>
            <p>{tggle.toString()}</p>
        </div>
    )
}

export default StCounter
