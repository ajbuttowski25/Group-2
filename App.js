import React, { useState } from 'react';
import './App.css'; 
import ProductList from './ProductList';
import Cart from './Cart';
import amazonImage from "./images/amazon.png";
import lowmindsImage from "./images/lowminds.jpg";
import leggingsImage from "./images/leggings.png";
import abibasImage from "./images/abibas.jpg";
import shoppepenImage from "./images/shoppepen.jpg";
import mandhImage from "./images/mandh.jpg";
import uniquloImage from "./images/uniqulo.jpg";
import niekImage from "./images/niek.jpg";
import bucciImage from "./images/bucci.jpg";
import carheartImage from "./images/carheart.jpg";
import benjImage from "./images/benj.jpg";


const App = () => {
    const [cart, setCart] = useState([]);

    const products = [

        { id: 1, name: 'Lowminds', description: 'T-shirt', price: 50, image: lowmindsImage },
        { id: 2, name: 'Sheout', description: 'Leggings', price: 20, image: leggingsImage },
        { id: 3, name: 'Abibas', description: 'Socks', price: 10, image: abibasImage },
        { id: 4, name: 'Niek', description: 'Shorts', price: 15, image: niekImage },
        { id: 5, name: 'ShoppePen', description: 'Dress', price: 30, image: shoppepenImage },
        { id: 6, name: 'M and H', description: 'Blouse', price: 25, image: mandhImage },
        { id: 7, name: 'Uniqulo', description: 'Polo', price: 55, image: uniquloImage },
        { id: 8, name: 'Bucci', description: 'Jacket', price: 150, image: bucciImage },
        { id: 9, name: 'Benj', description: 'Sweater', price: 100, image: benjImage },
        { id: 10, name: 'CarHeart', description: 'Hoodie', price: 200, image: carheartImage },

    ];
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };
    return (
        <div className="App">
            <h1>
                <img src={amazonImage}/>
            </h1>

            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};
export default App;