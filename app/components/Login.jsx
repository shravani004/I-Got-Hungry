import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div class="flex sm:justify-center md:justify-end">
        <Link href="/popup" class="btn text-primary-100 border-primary-100 md:border-2 hover:bg-primary-100 hover:text-white transition ease-out duration-500"> Log in</Link>
        <Link href="/signup" class="btn text-primary-100 ml-2 border-primary-100 md:border-2 hover:bg-primary-100 hover:text-white transition ease-out duration-500">Sign up </Link>
    </div>
  )
}

export default Login