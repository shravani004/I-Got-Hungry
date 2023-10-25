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
            <h2 className='text-gray-700 text-6xl font-semibold'> Lemon Cheesecake </h2>
            <h3 className="text-2xl font-semibold"> Food archive </h3>
          </header>
        <div className="px-8 py-6 bg-gray-100 w-full rounded-md shadow-lg text-lg text-justify">
        <Image
          class="p-8 object-cover"
          src="https://i.ytimg.com/vi/_GaKxt84z7o/maxresdefault.jpg"
          alt="Lemon Cheesecake"
          width={800}
          height={1000}
        />
        <p class="p-8 text-xl"> Crush the biscuits finely, add melted butter and mix well. Press this onto a greased shallow glass dish/loose bottom pie dish and chill for 15 minutes in the refrigerator. Whisk the Nestlé MILKMAID and lime juice together until thick. Whip the cream till soft peaks form and fold into the Milkmaid mixture, gently mix till combined. Pour onto the chilled biscuit layer and swirl the green colour through the mixture to get a marbled effect. Freeze for 1-2 hours or until set. </p>
        </div>
      </main>
    </div>
  )
}

export default page