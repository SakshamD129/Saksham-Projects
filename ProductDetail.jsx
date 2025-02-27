import { useLocation, useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();
    console.log(location);
    console.log(location.pathname);
    return (
        <h3>User:{id}</h3>
    );
}

export default ProductDetail;