import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = async ({ params: { slug } }) => {
  let data = await fetch(`https://fakestoreapi.com/products/category/${slug}`);
  let products = await data.json();
  return (
    <>
      <div>
        <h2>Category: {slug}</h2>
      </div>
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
    </>
  );
};

export default page;
