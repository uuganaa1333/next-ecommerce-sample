'use client';

import React, { useEffect, useState, useContext } from 'react';
import ProductItem from './ProductItem';
import { ShoppingCartContext } from '../lib/ShoppingCartContext';
const AddToCart = ({ product }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <button className=" bg-blue-500 text-white rounded-md py-3" onClick={() => addToCart(product)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
