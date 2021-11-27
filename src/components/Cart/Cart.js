import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((current, ca) => current + ca.price, 0);
    return (
        <div className="cart">
            <h2>This is car</h2>
            <h4>Selected : {cart.length}</h4>
            {
                cart.map(fa => <li>{fa.name} - {fa.price}</li>)
            }
            <h3>Total: {totalPrice}</h3>
        </div>
    );
};

export default Cart;