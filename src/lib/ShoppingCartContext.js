'use client';

import React, { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  const removeFromCart = () => {};

  const clearCart = () => {};

  return <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</ShoppingCartContext.Provider>;
};
