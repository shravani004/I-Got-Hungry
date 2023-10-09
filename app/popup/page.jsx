import React from 'react';
import Form from './../components/Form';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 text-gray-700">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 flex flex-grow justify-center rounded-full animate-bounce">
          <Image
            src="/assets/pizza.png"
            alt="image"
            width={300}
            height={300}
          /> 
        </div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  )
}

export default page