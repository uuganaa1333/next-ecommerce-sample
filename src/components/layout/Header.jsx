'use client';
import React from 'react';
import Link from 'next/link';
import { Categories } from './Categories';
const Header = ({ title }) => {
  return (
    <header>
      <nav className="flex justify-center my-5">
        <Link className="mx-3 text-slate-700" href="/">
          {title}
        </Link>
        <Link className="mx-3 text-slate-700" href="/about">
          About
        </Link>
        <Link className="mx-3 text-slate-700" href="/products">
          Products
        </Link>
        <Categories />
      </nav>
    </header>
  );
};

export default Header;
