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
            <h2 className='text-gray-700 text-6xl font-semibold'> Cheeseball bites </h2>
            <h3 className="text-2xl font-semibold"> Food archive </h3>
        </header>
        <div className="px-8 py-6 bg-gray-100 w-full rounded-md shadow-lg text-lg text-justify">
            <Image
              class="p-8 object-cover"
              src="https://del.h-cdn.co/assets/18/09/2048x1536/sd-aspect-1519935673-delish-cheese-ball-bites.jpg"
              alt="cheeseball bites"
              width={800}
              height={1000}
            />
            <p class="p-8 text-xl"> In a large nonstick skillet, cook bacon until crispy, 8 minutes. Drain on a paper towel-lined plate, then finely chop. Set aside. Meanwhile, in a large bowl, stir together cream cheese, cheddar cheese, garlic powder, and paprika and season with salt and pepper. Use a cookie scoop to form mixture into 18 small balls and transfer to a parchment–lined baking sheet. Refrigerate until firm, 1 hour. In a shallow bowl, stir together bacon, chives, and pecans.Roll balls in bacon-chive-pecan mixture, insert a pretzel stick into each, and let come to room temperature 15 minutes before serving. (If not serving right away, loosely cover with plastic wrap and return to fridge.) </p>
        </div>
      </main>
    </div>
  )
}

export default page