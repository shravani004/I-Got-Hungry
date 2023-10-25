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
            <h2 className='text-gray-700 text-6xl font-semibold'> Steak, peach and watercress salad </h2>
            <h3 className="text-2xl font-semibold"> Food archive </h3>
          </header>
        <div className="px-8 py-6 bg-gray-100 w-full rounded-md shadow-lg text-lg text-justify">
        <Image
          class="p-8 object-cover"
          src="https://hips.hearstapps.com/hmg-prod/images/steaksalad-1656608263.jpg?crop=0.820xw:0.547xh;0.0969xw,0.272xh&resize=640:*"
          alt="Steak, peach and watercress salad"
          width={800}
          height={1000}
        />
        <p class="p-8 text-xl"> Heat broiler. Season steak with ½ teaspoon each salt and pepper and place on broiler-proof rimmed baking sheet. Broil to desired doneness, 3 to 4 minutes per side for medium-rare. Transfer to cutting board and let rest at least 5 minutes before slicing.Meanwhile, in large bowl, whisk together oil, vinegar, and ¼ teaspoon each salt and pepper. Add peaches and toss to combine. Fold in walnuts, cheese, chives, and steak. Then fold in cress. Serve topped with additional chives if desired. </p>
        </div>
      </main>
    </div>
  )
}

export default page