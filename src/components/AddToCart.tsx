'use client';

import React from 'react';

const AddToCart = ({ id }) => {
  const addNewCart = (id) => {
    console.log('works');
    fetch('https://fakestoreapi.com/carts/7', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 3,
        date: '2019-12-10', // Corrected date format
        products: [{ productId: id, quantity: 3 }],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.error('Error:', error)); // Added error handling
  };
  return (
    <button className=" bg-blue-500 text-white rounded-md py-3" onClick={() => addNewCart(id)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
