'use client';
import React from 'react';
import ProductList from '../components/ProductList';
import { ShoppingCartProvider } from '../lib/ShoppingCartContext';
const Home = () => {
  return (
    <div className="mx-auto p-6">
      <ProductList />
    </div>
  );
};

export default Home;
