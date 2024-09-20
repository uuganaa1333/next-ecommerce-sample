'use client';

import React, { useEffect, useState } from 'react';

const AddToCart = ({ product }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    setCart(shoppingCart);
  }, [setCart]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <button className=" bg-blue-500 text-white rounded-md py-3" onClick={() => addToCart(product)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
