import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import Fruit from './../Fruit/Fruit';
import './Home.css';

const Home = () => {
    const [fruits, setFruits] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setFruits(fakeData);
    }, []);

    const handleAddToCart = (fruit) => {
        const newCart = [...cart, fruit];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="div-1">
                {
                    fruits.map(fruit => <Fruit handleAddToCart={handleAddToCart} key={fruit.id} fruit={fruit} />)
                }
            </div>
            <div className="div-2">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Home;