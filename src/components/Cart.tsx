'use client';

import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function fetchCart() {
      let res = await fetch(`https://fakestoreapi.com/carts/5`);
      let data = await res.json();
      setCart(data);
    }
    fetchCart();
  }, []);
  return (
    <div>
      {cart && cart.products.map((product) => <ProductItem key={product.productId} productId={product.productId} quantity={product.quantity} />)}
    </div>
  );
};

export default Cart;
