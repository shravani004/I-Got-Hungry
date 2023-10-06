import Image from 'next/image';
import React from 'react';
import Nav from '@/app/components/Nav';
import Login from '@/app/components/Login';
import Header from '@/app/components/Header';
import Cards from '@/app/components/Cards';

export default function Home() {
  return (
      <div className="grid md:grid-cols-6 h-full">
        <Nav />
        <main className="px-16 py-6 bg-gray-100 md:col-span-5 max-h-max">
          <Login />
          <Header />
          <Cards />
        </main>
      </div>
  )
}
