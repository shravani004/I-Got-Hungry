"use client";
import { useState } from "react";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Menu = [
  {
    id: 1,
    title: "Garlic Noodles",
    src: "https://i.ytimg.com/vi/Vws35KLBJoo/maxresdefault.jpg",
    content:
      "Heat the vegetable oil in a large skillet over medium heat. Add the garlic and 3 green onions and cook for 2–3 minutes, until fragrant and tender. Add the carrots and snap peas, then stir in the brown sugar and soy sauce. Add the noodles and toss for a couple of minutes, until the noodles are well-coated and the vegetables are tender. Season with salt and pepper. Serve immediately, garnished with the remaining green onion. ",
  },
  {
    id: 2,
    title: "Chicken Garlic Stir Fry",
    src: "https://images.unsplash.com/photo-1534766438357-2b270dbd1b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2QlMjBzdGlyZnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "In a large pan on medium-high heat, add 1 tablespoon of oil. Once the oil is hot, add chicken, season with salt and pepper, and sauté until cooked through and browned. Remove cooked chicken from pan and set aside. In the same pan, heat 1 tablespoon of oil and add mushrooms. When the mushrooms start to soften, add broccoli florets and stir-fry until the broccoli is tender. Remove cooked mushrooms and broccoli from the pan and set aside. Add 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant. Add the remaining sauce ingredients and stir until smooth.Return the chicken and vegetables to the saucy pan, stir until heated through. Serve with hot rice or noodles",
  },
  {
    id: 3,
    title: "Chicken Alfredo Pasta",
    src: "https://images.unsplash.com/photo-1617548059706-d8a95dd91fe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHBhc3RhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "Melt the butter in a large pan over medium-high heat, then add the chicken breasts. Season with the salt, pepper, oregano, and basil. Cook 8-10 minutes, or until the chicken is fully cooked. Remove the chicken from the pan and set aside. Make the sauce: In the same pan over medium heat, melt the butter, then add the garlic. Cook until the garlic begins to soften. Stir in half of the flour at a time until incorporated. Gradually pour in the milk, stirring between additions, and cook until fully incorporated and the sauce begins to thicken. Season with the salt, pepper, oregano, and basil. Add the Parmesan cheese and stir until melted. In a large bowl, pour the sauce over cooked penne pasta, then add the chicken and toss well to combine. Add the parsley and Parmesan and toss again.",
    color: "text-brown-600",
  },
  {
    id: 4,
    title: "Steak, peach and watercress salad",
    src: "https://hips.hearstapps.com/hmg-prod/images/steaksalad-1656608263.jpg?crop=0.820xw:0.547xh;0.0969xw,0.272xh&resize=640:*",
    content:
      "Heat broiler. Season steak with ½ teaspoon each salt and pepper and place on broiler-proof rimmed baking sheet. Broil to desired doneness, 3 to 4 minutes per side for medium-rare. Transfer to cutting board and let rest at least 5 minutes before slicing.Meanwhile, in large bowl, whisk together oil, vinegar, and ¼ teaspoon each salt and pepper. Add peaches and toss to combine. Fold in walnuts, cheese, chives, and steak. Then fold in cress. Serve topped with additional chives if desired.",
    color: "text-brown-600",
  },
  {
    id: 5,
    title: "Air Fryer Falafel Salad",
    src: "https://images.unsplash.com/photo-1610653596329-eacc50074ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFsYWZlbCUyMHNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "In food processor, pulse garlic, scallion whites, and 1/2 cup baby kale until very finely chopped. Add chickpeas, lemon zest, flour, cumin, coriander, and 1/2 tsp salt and pulse to combine (chickpeas should be chopped but coarse). Form mixture into twenty-four 2-tablespoon balls.Heat air fryer to 325°F. Brush insert of basket with oil and add 12 falafel. Air-fry 15 minutes. Brush falafel with 1 tablespoon oil and increase air fryer temperature to 400°F. Air-fry until deeply golden, 4 more minutes. Repeat with remaining falafel. In large bowl, whisk together lemon juice and remaining 2 tablespoons olive oil. Add cucumbers and marinate, 5 minutes. Add remaining 6 cups baby kale, parsley, and mint leaves, scallion greens, and 1/2 tsp salt and toss. Top with falafel and dollop of yogurt.",
    color: "text-brown-300",
  },
];

export default function Tabdinner() {
  const [activeindex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeindex === index ? className : "";

  return (
    <div className="grid md:grid-cols-6 h-full">
      <Nav />
      <main className="bg-gray-100 md:col-span-5 max-h-max">
        {/*Tab List*/}
        <div className="bg-gray-100 flex justify-between items-center space-x-8 rounded-md p-4 w-full text-sm md:text-xl uppercase border-b border-gray-100">
          {Menu.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`${checkActive(
                  item.id,
                  "bg-gray-100 px-2 py-0 rounded-md text-gray-700 border-gray-100 border-b hover:text-gray-700"
                )}`}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <header className="bg-gray-100 px-16 py-6">
          {Menu.map((item) => (
            <h2
              key={item.id}
              className={`${item.id == activeindex ? "visible" : "hidden"} text-gray-700 text-6xl font-semibold`}
            >
              {item.title}
            </h2>
          ))}
          <h3 class="text-2xl font-semibold"> Food archive </h3>
        </header>
        <div className="px-16 py-6 bg-gray-100 w-full rounded-md shadow-lg text-lg text-justify">
          {/*Tab Panel*/}
          {Menu.map((item) => (
            <div
              key={item.id}
              className={`
    ${item.color} panel
    ${checkActive(item.id, "active")}`}
            >
              {item.content}
            </div>
          ))}
          {Menu.map((item) => (
            <div key={item.id} className={`${item.id == activeindex ? "visible" : "hidden"}`}>
              <div className="w-800 h-1000">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={720}
                  height={1280}
                  // fill
                  // priority
                  className="object-fit pb-10"
                />
              </div>
              {item.content}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
