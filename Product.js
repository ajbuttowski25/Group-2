import React from 'react';


function Product({product, addToCart }) {
    const { id, name, description, price, image } = product;


    return (

        <div className="product">
            <img src={image} alt={name} className="image" style={{ marginRight: '100px' }} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <button onClick={() => addToCart(product)} className="button">Add to Cart</button>

        </div>
    )
};
    export default Product;
