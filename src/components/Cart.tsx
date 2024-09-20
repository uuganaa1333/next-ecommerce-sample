'use client';

import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    setCart(cartItems);
  }, [setCart]);

  return (
    <div>
      <div className="h-[500px] overflow-scroll">
        {cart?.length > 0 ? cart.map((product) => <ProductItem key={product.id} product={product} />) : <p>Your cart is empty</p>}
      </div>
      <button className=" text-red-900">Clear cart</button>
    </div>
  );
};

export default Cart;
