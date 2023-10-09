'use client'
import { useState } from "react";
import Image from 'next/image';
import Nav from '@/app/components/Nav';

const Menu = [
  {
    id: 1,
    title: "Bread Bites",
    src: "https://hips.hearstapps.com/hmg-prod/images/parmesan-bread-bites3-1668724500.jpg?crop=0.949xw:0.647xh;0.0510xw,0.0186xh&resize=980:*",
    content:
      "Let pizza dough sit until room temperature if needed, about 1 hour. Preheat oven to 400°. Line a large baking sheet with parchment. In a small pot over low heat, melt butter. Add garlic and 1/2 teaspoon salt and cook, stirring often, until starting to froth, 4 to 6 minutes. Immediately remove pot from heat and let cool. On a lightly floured surface, stretch dough to a 9 square. Sprinkle with 1/2 cup Parmesan and gently press cheese into dough with your hands. Using a sharp knife or bench scraper, cut dough into 9 (1 inch-wide) strips. Separate each strip to keep from sticking. Cut each strip crosswise into 1 pieces. Arrange dough on prepared sheet in an even layer. Brush with about one-third of garlic butter. Sprinkle with mozzarella, sage, thyme, and remaining 1/2 cup Parmesan. Bake bread bites until golden brown, 15 to 20 minutes. Immediately brush with remaining garlic butter. Top with more Parmesan, sage, and thyme. Drizzle with hot honey",
  },
  {
    id: 2,
    title: "Artichoke Pesto Skewers",
    src: "https://hips.hearstapps.com/hmg-prod/images/07-antipasto-bites-12409-1589576492.jpg",
    content:
      "In a large pot of boiling water, add 1 tablespoon oil. Cook tortellini according to package directions until al dente. Drain and transfer to large bowl. Season cooked tortellini with salt and pepper. Add balsamic vinegar and 1/4 cup olive oil and mix to combine. Set aside. Marinate mozzarella: In a small bowl, add mozzarella balls, Italian seasoning, red pepper flakes, and remaining 1/4 cup olive oil. Mix to combine and set aside. Assemble skewers by layering one piece each mozzarella, salami, roasted red pepper, tortellini, basil, artichoke heart, and green olives.",
  },
  {
    id: 3,
    title: "Baked Feta Bites",
    src: "https://hips.hearstapps.com/hmg-prod/images/delish-feta-bites-111121-04-jg-1637361925.jpg",
    content:
      "Preheat oven to 375° and adjust oven rack to center position. Roll out crescent dough and pinch together seams. Using a chef’s knife, cut into 24 squares; lengthwise into quarters and crosswise into sixths. Grease mini muffin tin with cooking spray and place squares into muffin tin slots. Fill each square with a piece of roasted red pepper, a cube of feta, and a sprinkle of thyme leaves and shallots. Season bites lightly with salt. Bake until dough is cooked through and golden, 15 to 17 minutes. Let cool 5 minutes, then transfer to serving platter and top with more fresh thyme leaves. Grate a light layer of lemon zest over bites and serve.",
    color: "text-brown-600",
  },
  {
    id: 4,
    title: "Cheeseball Bites",
    src: "https://del.h-cdn.co/assets/18/09/2048x1536/sd-aspect-1519935673-delish-cheese-ball-bites.jpg",
    content:
      "In a large nonstick skillet, cook bacon until crispy, 8 minutes. Drain on a paper towel-lined plate, then finely chop. Set aside. Meanwhile, in a large bowl, stir together cream cheese, cheddar cheese, garlic powder, and paprika and season with salt and pepper. Use a cookie scoop to form mixture into 18 small balls and transfer to a parchment–lined baking sheet. Refrigerate until firm, 1 hour. In a shallow bowl, stir together bacon, chives, and pecans.Roll balls in bacon-chive-pecan mixture, insert a pretzel stick into each, and let come to room temperature 15 minutes before serving. (If not serving right away, loosely cover with plastic wrap and return to fridge.)",
    color: "text-brown-600",
  },
//   {
//     id: 5,
//     title: "Black Eyed Pea Brushcetta",
//     src: "",
//     content:
        "Preheat oven to 350° and arrange bread slices between 2 baking sheets. Lightly drizzle with oil on both sides. Bake, flipping halfway through, until crispy and toasted, about 10 minutes. Meanwhile, in a medium skillet over medium-high heat, cook bacon, stirring occasionally, until fat begins to render and bacon starts to crisp and turn brown on all sides, 7 to 8 minutes. Using a slotted spoon, transfer bacon to paper towels to drain, reserving excess fat in skillet.In a medium bowl, massage 1/2 tsp. salt into collard greens until greens begin to release water and soften, about 2 minutes. Add peas, bell pepper, scallion, and garlic and toss until combined; season with 1/2 tsp. salt. In a small bowl, combine vinegar, thyme, mustard, honey, Cajun seasoning, and 1/4 tsp. salt. Drizzle in 1 tbsp. of reserved bacon fat and remaining 2 tbsp. oil, whisking after each tbsp., until vinaigrette is smooth and emulsified. Pour over pea mixture and toss to coat.Smear toast with a thin layer of cheese. Top with 1 tbsp. pea mixture. Sprinkle with bacon, if using.",
//     color: "text-brown-300",
//   },
];

export default function Tabstarter() {
  const [activeindex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeindex === index ? className : "";

  return (
    <div className="grid md:grid-cols-6 h-full">
      <Nav />
      <main className="bg-gray-100 md:col-span-5 max-h-max">
        <div className="bg-gray-100 flex justify-between items-center space-x-8 rounded-md p-4 w-full text-sm md:text-xl uppercase border-b">
          {Menu.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`${checkActive(
                  item.id,
                  "bg-gray-100 px-2 py-0 rounded-md text-gray-700 font-bold"
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
