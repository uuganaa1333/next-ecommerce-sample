'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ProductItem = ({ productId, quantity }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      let res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      let data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [productId]);
  if (!product) return null;
  return (
    <div className="mb-5">
      <div className="grid grid-cols-3 gap-3 ">
        <div className="relative h-[50px]">
          <Image src={product.image} fill alt="image" />
        </div>
        <div className="col-span-2">
          <h6 className=" text-sm">{product.title}</h6>
        </div>
      </div>
      <div>Quantity: {quantity}</div>
    </div>
  );
};

export default ProductItem;
