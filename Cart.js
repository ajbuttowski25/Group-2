import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                    <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <span className="cart-item-name">{item.name + "          " + "("+ item.description+ ")" + "$" + item.price}</span>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>        
                        </div>
                    ))}
                    <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
                    </div>

            )}
        </div>
    );
};

export default Cart;