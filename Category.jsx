import productsData from "./Shopping.json";
import { useNavigate } from "react-router";


function Category() {
    const navigate = useNavigate();

    const categories = new Set(productsData.products.map(item => item.category));

    function Outer() {
        return (
            <main>
                <div className='cart-products'>
                    <button className="individual-categories" onClick={() => navigate('/category/all')}>All</button>
                    {
                        [...categories].map(category => (
                            <button
                                key={category}
                                className="individual-categories"
                                onClick={() => navigate(`/category/${category}`)}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>
            </main>
        );
    }

    return (
        <div>
            <Outer />
        </div>
    );
}


export default Category;
