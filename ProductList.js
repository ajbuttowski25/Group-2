import React from 'react';
import Product from './Product';
import { Link } from "react-router-dom";


const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
  };
        </div>
    );
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                <li>
                    <Link to="/product/1">Product 1</Link>
                </li>
                <li>
                    <Link to="/product/2">Product 2</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProductList;