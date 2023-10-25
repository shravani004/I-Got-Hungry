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
            <h2 className='text-gray-700 text-6xl font-semibold'> Artichoke Pesto Skewers </h2>
            <h3 className="text-2xl font-semibold"> Food archive </h3>
          </header>
        <div className="px-8 py-6 bg-gray-100 w-full rounded-md shadow-lg text-lg text-justify">
        <Image
        class="p-8 object-cover"
        src="https://hips.hearstapps.com/hmg-prod/images/07-antipasto-bites-12409-1589576492.jpg"
        alt="Artichoke Pesto Skewers"
        width={800}
        height={1000}
      />
        <p class="p-8 text-xl"> In a large pot of boiling water, add 1 tablespoon oil. Cook tortellini according to package directions until al dente. Drain and transfer to large bowl. Season cooked tortellini with salt and pepper. Add balsamic vinegar and 1/4 cup olive oil and mix to combine. Set aside. Marinate mozzarella: In a small bowl, add mozzarella balls, Italian seasoning, red pepper flakes, and remaining 1/4 cup olive oil. Mix to combine and set aside. Assemble skewers by layering one piece each mozzarella, salami, roasted red pepper, tortellini, basil, artichoke heart, and green olives. </p>
        </div>
      </main>
    </div>
  )
}

export default page