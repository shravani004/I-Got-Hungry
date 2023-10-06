'use client'
import React from 'react';

const Cards = () => {

  return (
    <div>
        <div>
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200"> In a nutshell </h4>
            <div class="mt-8 grid lg:grid-cols-3 gap-10">
                <a href="" className="card hover:shadow-lg">    
                    <div>
                        <img src="https://www.archanaskitchen.com/images/archanaskitchen/basic_recipes/Amazing_Non_Veg_Appetizers__Starters_For_Your_New_Year_Party.jpg" alt="curry" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold"> Starters </span>
                            <span class="block text-gray-500 text-sm">Grab a bite</span>
                        </div>
                        <div class="badge">
                            <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://cdn.tasteatlas.com//images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=375&h=280" alt="curry" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold"> Main course </span>
                            <span class="block text-gray-500 text-sm">Have your fill</span>
                        </div>
                        <div class="badge">
                            <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://www.foodandwine.com/thmb/ckc6L6xKox0WfpfO6dMkuVGPQOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Angel-Food-Cake-with-Three-Berry-Compote-FT-RECIPE0323-541a780b871441e0ab14383ee38acc44.jpg" alt="noodles" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold"> Desserts </span>
                            <span class="block text-gray-500 text-sm">Finish your meal with a delicacy</span>
                        </div>
                        <div class="badge">
                            <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div id="pop">
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
            <div class="my-8 grid lg:grid-cols-3 gap-10">
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="stew" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Stew </span>
                            <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="curry" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold"> Tofu Curry</span>
                            <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="noodles" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold">Veg noodles</span>
                            <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div class="badge">
                            <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="stew" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Stew </span>
                            <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="curry" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold"> Tofu Curry</span>
                            <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="card hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="noodles" class="w-full h-32 sm:h-48 object-cover" />
                        <div class="m-4">
                            <span class="font-bold">Veg noodles</span>
                            <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div class="badge">
                            <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Cards