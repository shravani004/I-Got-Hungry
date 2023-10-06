'use client'
import { useState } from "react";

const Menu = [
  {
    id: 1,
    title: "Orange Pudding Recipe",
    src: "https://www.milkmaid.in/sites/default/files/2022-12/Orange-Delight-Pudding-335x300.jpg",
    content:
      "Soak the gelatin in orange juice and heat it over a pan of hot water until the gelatin dissolves. Let it cool and keep it aside. In a bowl, whip cream until it is light and fluffy (keep aside 3- 4 tbsp for decorating). Fold in Nestlé MILKMAID and add the gelatin mixture. Pour this into a wet mould and freeze. Unmould and serve decorated with oranges and whipped cream!",
  },
  {
    id: 2,
    title: "Lemon Cheesecake",
    src: "https://i.ytimg.com/vi/_GaKxt84z7o/maxresdefault.jpg",
    content:
      "Crush the biscuits finely, add melted butter and mix well. Press this onto a greased shallow glass dish/loose bottom pie dish and chill for 15 minutes in the refrigerator. Whisk the Nestlé MILKMAID and lime juice together until thick. Whip the cream till soft peaks form and fold into the Milkmaid mixture, gently mix till combined. Pour onto the chilled biscuit layer and swirl the green colour through the mixture to get a marbled effect. Freeze for 1-2 hours or until set.",
  },
  {
    id: 3,
    title: "Chocolate faces cookies",
    src: "https://www.milkmaid.in/sites/default/files/2020-08/Chocolate-Face-590x436.jpg",
    content:
      "Heat Nestlé MILKMAID, cocoa powder, and butter in a pan. Cook till the mixture starts leaving the sides of the pan. Remove from fire. Spread 1 tsp of this mixture onto each biscuit and leave to dry for 5 minutes. Divide the coconut powder into two equal portions and color one green and the other yellow.  Decorate each biscuit by making eyes with raisins, mouth with cashew halves, and hair with colored coconut powder.",
    color: "text-brown-600",
  },
  {
    id: 4,
    title: "Mawa Kheer",
    src: "https://i.ytimg.com/vi/8RzTpudETRg/maxresdefault.jpg",
    content:
      "In a bowl, mix Nestlé MILKMAID, milk, saffron and keep aside. In a pan, heat ½ tbsp ghee, fry the makhana for a minute and remove from pan. Cool and crush them. Heat the remaining ghee and fry all the dry fruits until golden brown. Add the crushed makhana, fried dry fruits to the Milkmaid - milk mixture (made in step 1) and boil this mixture. Simmer until it is thick and creamy. Add the elaichi powder, mix well and remove from flame. Serve hot or cold.",
    color: "text-brown-600",
  },
  {
    id: 5,
    title: "Chocolate Tower",
    src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Croquembouche-profiterole-tower-ceb1da8.jpg?quality=90&resize=556,505",
    content: "Boil water and coffee powder to prepare a coffee liquor. To assemble, take 8 small bowls and make layers with the biscuits dipped in coffee liquor and Nestlé MILKMAID. Make five layers in each bowl leaving enough space on top for the Chocolate Butter Sauce. For Chocolate Butter Sauce: Combine Nestlé MILKMAID, coffee powder, butter and cocoa powder to make chocolate butter sauce. Spread this over the top biscuit layer. Decorate with walnuts and serve chilled!",
    color: "text-brown-300",
  },
];

export default function Tab() {
  const [activeindex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeindex === index ? className : "";

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-white flex justify-between items-center space-x-8 rounded-md px-4 py-2 w-full">
        {/*Tab List*/}
        {Menu.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`${checkActive(
              item.id,
              "bg-white px-2 py-1 rounded-md text-indigo-600"
            )}`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="bg-white w-full rounded-md shadow-lg text-lg p-8 text-justify">
        {/*Tab Panel*/}
        {/*{Menu.map((item) => (
                <div key={item.id} className={`
${item.color} p-2 panel 
${checkActive(item.id,"active")}`
}>{item.content}</div>
            ))};*/}
        {Menu.map((item) => (
            <div className = {`${item.id==activeindex ? 'visible': 'hidden' }`}>
            <img
              src={item.src}
              alt=""
              className="w-full h-[450px] object-fit border-solid border-2 pb-2"
            />
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
