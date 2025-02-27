import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <button className="btn" onClick={() => navigate('products')}>
                    Place Order
                </button>
                <button className="btn" onClick={() => navigate(-1)}>
                    Go Back
                </button>
                <NavLink to="/product/1">Post 1</NavLink>
                <NavLink to="/product/2">Post 2</NavLink>
                <NavLink to="/product/3">Post 3</NavLink>
            </ul>
        </nav>
    );
};

export default NavBar;