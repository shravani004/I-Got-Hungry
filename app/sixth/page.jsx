import React from 'react';
import Image from 'next/image';
import Nav from '@/app/components/Nav';

const page = () => {
  return (
    <div className="grid md:grid-cols-6 h-full">
      <Nav />
      <main className="bg-gray-100 md:col-span-5 max-h-max">
        <div className="bg-gray-100 space-x-8 rounded-md p-4 h-16"> </div>
        <header className="bg-gray-100 px-16 py-6">
            <h2 className='text-gray-700 text-6xl font-semibold'> Chocolate Tower </h2>
            <h3 className="text-2xl font-semibold"> Food archive </h3>
          </header>
        <div className="px-8 py-6 bg-gray-100 w-full rounded-md shadow-lg text-lg text-justify">
        <Image
          class="p-8 object-cover"
          src="https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Croquembouche-profiterole-tower-ceb1da8.jpg?quality=90&resize=556,505"
          alt="Chocolate Tower"
          width={800}
          height={1000}
        />
        <p class="p-8 text-xl"> Boil water and coffee powder to prepare a coffee liquor. To assemble, take 8 small bowls and make layers with the biscuits dipped in coffee liquor and Nestlé MILKMAID. Make five layers in each bowl leaving enough space on top for the Chocolate Butter Sauce. For Chocolate Butter Sauce: Combine Nestlé MILKMAID, coffee powder, butter and cocoa powder to make chocolate butter sauce. Spread this over the top biscuit layer. Decorate with walnuts and serve chilled! </p>
        </div>
      </main>
    </div>
  )
}

export default page