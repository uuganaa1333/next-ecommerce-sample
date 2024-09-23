'use client';
import { ShoppingCartProvider } from '../lib/ShoppingCartContext';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import Header from '../components/layout/Header';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ShoppingCartProvider>
          <>
            <Header title={'Home page'} />
            {children}
          </>
        </ShoppingCartProvider>

        {/* footer */}
      </body>
    </html>
  );
}
