'use client';
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { Categories } from './Categories';
import Image from 'next/image';
import Cart from '../Cart';
import { ShoppingCartContext } from '../../lib/ShoppingCartContext';
const Header = ({ title }) => {
  const [show, setShow] = useState(false);
  const { cart } = useContext(ShoppingCartContext);
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
        <button onClick={() => setShow(!show)}>
          <Image src={'/cart.svg'} width={18} height={18} alt="cart" />
          {cart && cart.length > 0 && <div className="badge">{cart.length}</div>}
        </button>
      </nav>
      <div className="cart fixed z-20 top-0 h-screen w-[250px] bg-slate-300 duration-300 p-10 shadow-md" style={{ right: show ? '0px' : '-250px' }}>
        <button onClick={() => setShow(!show)}>X</button>
        <h3>Your cart:</h3>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
