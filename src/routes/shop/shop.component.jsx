// import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>

    );
}

export default Shop;