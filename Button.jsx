
function Button() {
    const handleClick = (e) => {
        e.target.textContent = "Yeah Buudy";
        <h1>{e}</h1>
    };
    return (
        <button onClick={(e) => handleClick(e)}>Click Me</button>
    );
}
export default Button