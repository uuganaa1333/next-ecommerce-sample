import Image from 'next/image';
import React from 'react';
import RelatedProducts from '../../../components/RelatedProducts';
import AddToCart from '../../../components/AddToCart';

export async function generateMetadata({ params: { id } }) {
  let data = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await data.json();

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

const page = async ({ params: { id } }) => {
  let data = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await data.json();
  const ratingWidth = (100 * product.rating.rate) / 5;

  return (
    <div className="mx-auto my-10 max-w-3xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="img relative w-full h-[500px] ">
          <Image src={product.image} fill alt={product.title} />
        </div>
        <div className="">
          <h2 className="text-2xl mb-5">{product.title}</h2>
          <p className=" text-slate-600 text-sm">{product.description}</p>
          <hr className="my-10" />
          <div className="flex justify-between">
            <span>{product.rating.count > 0 && 'In Stock'}</span>

            <span className="text-3xl font-bold">{product.price} $</span>
          </div>
          <div className="flex justify-between">
            <span>{'Review:'}</span>
            <span className="font-bold">{product.rating.rate} / 5</span>
          </div>
          <div className="progress w-full h-3 bg-slate-500">
            <div style={{ width: ratingWidth + '%' }} className={`h-3 bg-yellow-200`}></div>
          </div>
          <div className="grid grid-cols-2 gap-3 my-6">
            <AddToCart product={product} />
            <button className=" bg-slate-900 text-white rounded-md py-3">Purchase</button>
          </div>
        </div>
      </div>
      <RelatedProducts category={product.category} />
    </div>
  );
};

export default page;
