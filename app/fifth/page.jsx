import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
        <h2 class="text-center text-5xl p-10"> Chocolate faces cookies </h2>
        <Image class="w-full h-25 p-8 object-cover" src="https://www.milkmaid.in/sites/default/files/2020-08/Chocolate-Face-590x436.jpg" alt="chocolate faces cookies" />
        <p class="p-8 text-rose-950 text-xl"> Heat Nestlé MILKMAID, cocoa powder, and butter in a pan. Cook till the mixture starts leaving the sides of the pan. Remove from fire. Spread 1 tsp of this mixture onto each biscuit and leave to dry for 5 minutes. Divide the coconut powder into two equal portions and color one green and the other yellow.  Decorate each biscuit by making eyes with raisins, mouth with cashew halves, and hair with colored coconut powder. </p>
    </div>
  )
}

export default page