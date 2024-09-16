import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = async () => {
  let data = await fetch(`${process.env.API_URL}/products`);
  let products = await data.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {products.map((product) => {
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
  );
};

export default ProductList;
