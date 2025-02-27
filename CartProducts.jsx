import { useParams } from 'react-router';
import CartAdd from './CartAdd.jsx';
import productsData from "./Shopping.json";
import { useRef } from 'react';
function CartProducts() {
    return (
        <div>
            <All />
        </div>
    )
}
function All() {
    const { id } = useParams();
    const { increase, putitin } = CartAdd();
    const fordecrement = useRef({});
    function forShop(number) {
        increase();
        putitin(number);
        fordecrement.current[filterDATA[number - 1].id].textContent -= 1;
    }
    const filterDATA = (id == "all") ? productsData.products : productsData.products.filter(item => id == item.category);
    return (
        <div className="cart-products">
            {filterDATA.map((individual, index) => (
                <div key={index} className="cart-item" >
                    <button className="Shop-button" onClick={() => forShop(individual.id)}>Shop</button>
                    <div>{individual.name}</div>
                    <div>Price:${individual.price}</div>
                    <br />
                    <div>Stock:{individual.stock}  <div>Bought:<div ref={(element) => (fordecrement.current[individual.id] = element)} data-key={individual.id}>0</div> </div></div>
                </div>
            ))}
        </div>
    );
}

export default CartProducts;
