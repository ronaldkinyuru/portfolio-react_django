import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            } else {
                return [...prevCart, product];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const updateCart = (updatedProduct) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex(item => item.id === updatedProduct.id);
            if (productIndex !== -1) {
                const newCart = [...prevCart];
                newCart[productIndex] = updatedProduct;
                return newCart;
            }
            return [...prevCart, updatedProduct];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};
