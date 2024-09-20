'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ProductItem = ({ product }) => {
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
      <div className="flex justify-between">
        <div>Quantity: {product.rating.count}</div>
        <button className="text-red-800">Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
