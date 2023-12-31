'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import {useNavigate} from "react-router-dom";

const Cards = () => {
    // const navigate = useNavigate();

  return (
    <div>
        <div>
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200"> In a nutshell </h4>
            <div class="mt-8 grid lg:grid-cols-3 gap-10">
                <Link href="/starter" className="card hover:shadow-lg">    
                    <div>
                        <Image 
                            src="https://www.archanaskitchen.com/images/archanaskitchen/basic_recipes/Amazing_Non_Veg_Appetizers__Starters_For_Your_New_Year_Party.jpg" 
                            alt="starters" 
                            class="w-full h-32 sm:h-48 object-cover"
                            width={400}
                            height={400} 
                        />
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
                </Link>
                <Link href="/maincourse">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFpbiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="main course" 
                            class="w-full h-32 sm:h-48 object-cover"
                            width={400} 
                            height={400}
                        />
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
                </Link>
                <Link href="/desserts">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://www.foodandwine.com/thmb/ckc6L6xKox0WfpfO6dMkuVGPQOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Angel-Food-Cake-with-Three-Berry-Compote-FT-RECIPE0323-541a780b871441e0ab14383ee38acc44.jpg" 
                            alt="desserts" 
                            class="w-full h-32 sm:h-48 object-cover"
                            width={400}
                            height={400}
                        />
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
                </Link>
            </div>
        </div>
        <div id="pop">
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
            <div class="my-8 grid lg:grid-cols-3 gap-10">
                <Link href="first">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://del.h-cdn.co/assets/18/09/2048x1536/sd-aspect-1519935673-delish-cheese-ball-bites.jpg" 
                            alt="cheeseball bites" 
                            class="w-full h-32 sm:h-48 object-cover"
                            width={400}
                            height={400}
                        />
                        <div class="m-4">
                            <span class="font-bold"> Cheeseball bites </span>
                            <span class="block text-gray-500 text-sm"> Yum! </span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </Link>
                <Link href="/second">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://hips.hearstapps.com/hmg-prod/images/07-antipasto-bites-12409-1589576492.jpg"
                            alt="Artichoke Pesto Skewers"
                            class="w-full h-32 sm:h-48 object-cover"
                            width={400}
                            height={400}
                        />
                        <div class="m-4">
                            <span class="font-bold"> Artichoke Pesto Skewers </span>
                            <span class="block text-gray-500 text-sm">Delicious</span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </Link>
                <Link href="/third">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://hips.hearstapps.com/hmg-prod/images/steaksalad-1656608263.jpg?crop=0.820xw:0.547xh;0.0969xw,0.272xh&resize=640:*"
                            alt="Steak, peach and watercress salad" 
                            class="w-full h-32 sm:h-48 object-cover"
                            width={300}
                            height={300}
                        />
                        <div class="m-4">
                            <span class="font-bold">  Steak, peach and watercress salad </span>
                            <span class="block text-gray-500 text-sm"> Fabulous </span>
                        </div>
                        <div class="badge">
                            <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link href="/fourth">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://i.ytimg.com/vi/_GaKxt84z7o/maxresdefault.jpg"
                            alt="Lemon cheesecake"
                            class="w-full h-32 sm:h-48 object-cover"
                            width={300}
                            height={300}
                        />
                        <div class="m-4">
                            <span class="font-bold"> Lemon Cheesecake </span>
                            <span class="block text-gray-500 text-sm"> Tangy </span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </Link>
                <Link href="/fifth">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://www.milkmaid.in/sites/default/files/2020-08/Chocolate-Face-590x436.jpg"
                            alt="choco face cookies"
                            class="w-full h-32 sm:h-48 object-cover"
                            width={300}
                            height={300}
                        />
                        <div class="m-4">
                            <span class="font-bold"> Chocolate faces cookies </span>
                            <span class="block text-gray-500 text-sm"> Looks mouth-watering </span>
                        </div>
                        <div class="badge">
                        <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        </div>
                    </div>
                </Link>
                <Link href="/sixth">
                    <div class="card hover:shadow-lg">
                        <Image
                            src="https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Croquembouche-profiterole-tower-ceb1da8.jpg?quality=90&resize=556,505"
                            alt="choco tower"
                            class="w-full h-32 sm:h-48 object-cover"
                            width={300}
                            height={300}
                        />
                        <div class="m-4">
                            <span class="font-bold"> Chocolate Tower </span>
                            <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                        </div>
                        <div class="badge">
                            <svg class="w-5 inline-block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Cards