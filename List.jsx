
function List(props) {

    const category = props.category;
    const itemsList = props.items;

    const listItems = itemsList.map(item =>
        <li key={item.name}>
            {item.name} :
            {item.calories}</li>);
    return (
        <>
            <ol><h3>{category}</h3>{listItems}</ol>
        </>
    );
}
export default List