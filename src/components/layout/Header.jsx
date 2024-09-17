'use client';
import React from 'react';
import Link from 'next/link';
import { Categories } from './Categories';
const Header = ({ title }) => {
  return (
    <header>
      <nav>
        <Link className="mx-4 text-slate-700" href="/">
          {title}
        </Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Categories />
      </nav>
    </header>
  );
};

export default Header;
