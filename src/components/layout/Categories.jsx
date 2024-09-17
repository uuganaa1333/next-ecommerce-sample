'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      let res = await fetch('https://fakestoreapi.com/products/categories');
      let data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  if (!categories) return <div>Loading...</div>;

  return (
    <>
      {categories.map((cat) => (
        <Link className="mx-3" href={`/categories/${cat}`} key={cat}>
          {cat}
        </Link>
      ))}
    </>
  );
}
