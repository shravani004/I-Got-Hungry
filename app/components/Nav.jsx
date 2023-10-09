'use client'
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Nav = () => {
    const [show, setShow] = useState(false)

    return (
        <div class="md:col-span-1 md:flex md:justify-end bg-white">
            <nav class="text-right font-nuni">
            <div class="flex justify-between items-center">
                <h1 class="font-bold uppercase p-4 border-b border-gray-100">
                    <a href="/" class="text-sm md:text-xl hover:text-gray-700"> I Got Hungry </a>
                </h1>
                <div class="px-4 cursor-pointer md:hidden" id="icon">
                    <button onClick={() => setShow(prev => !prev)}>
                    <svg class="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"></path>
                    </svg>
                    </button>
                </div>
            </div>
            {show &&
            <ul class="text-sm mt-6 md:hidden" id="menu">
                <li class="py-1 hover:text-slate-700 hover:font-bold">
                    <a href="/" class="px-4 flex justify-end hover:border-r-4 hover:border-primary-100">
                        <span>Home</span>
                        <svg class="w-5 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                    </a>
                </li>
                <li class="py-1 hover:text-slate-700 hover:font-bold">
                    <Link href="/about" class="px-4 flex justify-end hover:border-r-4 hover:border-primary-100">
                        <span>About</span>
                        <svg class="w-5 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                        </svg>
                    </Link>
                </li>
                <li class="py-1 hover:text-slate-700 hover:font-bold">
                    <Link href="/contact" class="px-4 flex justify-end hover:border-r-4 hover:border-primary-100">
                        <span>Contact</span>
                        <svg class="w-5 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
                        </svg>
                    </Link>
                </li>
            </ul>
            }
            <ul class="text-sm mt-6 hidden md:block">
                <li class="py-1 hover:text-slate-700 hover:font-bold">
                    <a href="/" class="px-4 flex justify-end hover:border-r-4 hover:border-primary-100">
                        <span>Home</span>
                        <svg class="w-5 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                    </a>
                </li>
                <li class="py-1 hover:text-slate-700 hover:font-bold">
                    <Link href="/about" class="px-4 flex justify-end hover:border-r-4 hover:border-primary-100">
                        <span>About</span>
                        <svg class="w-5 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                        </svg>
                    </Link>
                </li>
                <li class="py-1 hover:text-slate-700 hover:font-bold">
                    <Link href="/contact" class="px-4 flex justify-end hover:border-r-4 hover:border-primary-100">
                        <span>Contact</span>
                        <svg class="w-5 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
                        </svg>
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
  )
}

export default Nav