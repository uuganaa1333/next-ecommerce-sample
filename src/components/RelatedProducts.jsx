'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      let data = await res.json();
      setProducts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <h6>Related products</h6>
      <div className="grid grid-cols-4">
        {products &&
          products.map((product) => {
            return (
              <Link href={`/products/${product.id}`} key={product.id} className="card">
                <div className="w-full h-[250px] relative">
                  <Image src={product.image} fill alt="" className=" object-cover" />
                </div>
                <h2 className="my-3">{product.title}</h2>
                <div className="flex justify-between w-full text-sm text-slate-500">
                  <span>{product.category}</span>
                  <span>{product.price}$</span>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default RelatedProducts;
