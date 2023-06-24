// import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <Fragment>
            <div className="products-container">

                {
                    products.map((product) => (
                       <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </Fragment>

    );
}

export default Shop;