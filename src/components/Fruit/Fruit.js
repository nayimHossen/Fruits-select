import React from 'react';
import './Fruit.css';

const Fruit = (props) => {
    const handleAddToCart = props.handleAddToCart;
    const { name, price, image, area } = props.fruit;
    return (
        <div className="fruit-container">
            <div className="fruit-img">
                <img src={image} alt="" />
            </div>
            <div className="fruit-info">
                <h4>Name: {name}</h4>
                <h4>Name: {price}</h4>
                <h4>Name: {area}</h4>
                <button onClick={() => handleAddToCart(props.fruit)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Fruit;