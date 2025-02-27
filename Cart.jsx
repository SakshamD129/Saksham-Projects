import { useNavigate, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Category from './Category.jsx';
import CartAdd from './CartAdd.jsx';
import CartProducts from './CartProducts.jsx';
import productDetails from './Shopping.json';
function Cart() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/category' element={<Category />} />
                <Route path="/category/:id" element={<CartProducts />} />
                <Route path="/cart" element={<CartFunction />}></Route>
            </Routes >
        </>
    )
}
function CartFunction() {
    const { additional } = CartAdd();
    if (additional.length <= 0) {
        return (
            <div style={{ color: "aqua", display: "flex", justifyContent: "center" }}>No items added to Cart</div>
        );
    } else {
        additional.sort();
        const additionalProducts = productDetails.products.filter(item => additional.includes(item.id));
        let dictionary = new Map();
        for (let i = 0; i <= additional.length - 1; i++) {
            if (dictionary.has(additional[i])) {
                dictionary.set(additional[i], dictionary.get(additional[i]) + 1);
            } else {
                dictionary.set(additional[i], 1);
            }
        }
        return (
            <div className="cart-products">
                {additionalProducts.map((individual) => (
                    <button key={individual.id} className="cart-item" >
                        <div>{dictionary.get(individual.id)}X</div>
                        <div>{individual.name}</div>
                        <div>Price:${individual.price}</div>
                        <br />
                        <div>Stock:{individual.stock}</div>
                        <div>Total Price:{individual.price * dictionary.get(individual.id)}</div>
                    </button>
                ))}
            </div>
        );
    }
}
function Navbar() {
    const { count } = CartAdd();
    const navigate = useNavigate();
    return (
        <div className='cart-navbar'>
            <button className="cart-button" onClick={() => navigate('/')}>Home</button>
            <button className="cart-button" onClick={() => navigate('/about')}>About</button>
            <button className="cart-button" onClick={() => navigate('/category')}>Category</button>
            <button className="cart-button" onClick={() => navigate('/cart')}>Cart:{count}</button>
        </div >
    );
}

export default Cart;
