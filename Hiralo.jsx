import Zpractice from './Zpractice.jsx';
function Hiralo() {
    const { count, increase, decrease } = Zpractice();
    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>Add</button>
            <button onClick={decrease}>Sub</button>
        </div>
    )
}

export default Hiralo
