import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
        <h2 class="text-center text-5xl p-10"> Lemon Cheesecake </h2>
        <Image class="w-full h-25 p-8 object-cover" src="https://i.ytimg.com/vi/_GaKxt84z7o/maxresdefault.jpg" alt="cheeseball bites" />
        <p class="p-8 text-rose-950 text-xl"> Crush the biscuits finely, add melted butter and mix well. Press this onto a greased shallow glass dish/loose bottom pie dish and chill for 15 minutes in the refrigerator. Whisk the Nestlé MILKMAID and lime juice together until thick. Whip the cream till soft peaks form and fold into the Milkmaid mixture, gently mix till combined. Pour onto the chilled biscuit layer and swirl the green colour through the mixture to get a marbled effect. Freeze for 1-2 hours or until set. </p>
    </div>
  )
}

export default page