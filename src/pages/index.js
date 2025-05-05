// index.js
import { useState } from 'react';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const mealsByDiet = {
  omnivore: [
    {
      name: "Japanese Tamago Breakfast",
      type: "breakfast",
      img: "/images/meals/tamago.jpg",
      ingredients: ["2 eggs", "1 tbsp soy sauce", "1 tsp sugar", "1/2 cup cooked white rice", "Cooking oil"],
      instructions: "1. Crack the eggs into a bowl, add soy sauce and sugar, and beat until well mixed.\n2. Heat a small non-stick pan over medium-low heat and lightly oil it.\n3. Pour a thin layer of egg mixture into the pan and tilt to spread it evenly.\n4. When the layer is half set, roll it from one side to the other using chopsticks or a spatula.\n5. Push the rolled egg back to the starting side and oil the pan again.\n6. Pour another thin layer, lift the roll to let egg go underneath, and roll again once half set.\n7. Repeat until all egg mixture is used.\n8. Let the tamagoyaki cool slightly, then slice into pieces and serve with rice."
    },
    {
      name: "Italian Chicken Panini",
      type: "lunch",
      img: "/images/meals/panini.jpg",
      ingredients: ["Grilled chicken breast", "Ciabatta bread", "Fresh mozzarella", "Basil pesto", "Butter"],
      instructions: "1. Slice the ciabatta and spread basil pesto on both inner sides.\n2. Add slices of grilled chicken and fresh mozzarella.\n3. Close the sandwich and butter the outside.\n4. Grill in a panini press or hot skillet for 4–5 minutes until golden and cheese is melted.\n5. Slice and serve warm."
    },
    {
      name: "Argentinian Steak with Chimichurri",
      type: "dinner",
      img: "/images/meals/steak.jpg",
      ingredients: ["1 ribeye steak", "Salt & pepper", "Chimichurri sauce", "Roasted potatoes"],
      instructions: "1. Season steak with salt and pepper.\n2. Heat grill or cast-iron skillet to high and cook steak 3–5 minutes per side (depending on thickness).\n3. Rest steak 5 minutes.\n4. Spoon chimichurri sauce over the top.\n5. Serve with roasted potatoes on the side."
    }
  ],
  vegetarian: [
    {
      name: "Indian Masala Oats",
      type: "breakfast",
      img: "/images/meals/masala_oats.jpg",
      ingredients: ["1/2 cup oats", "1/2 cup chopped vegetables", "1/4 tsp turmeric", "1/4 tsp garam masala", "Salt"],
      instructions: "1. Heat oil in a pan and sauté vegetables for 2–3 minutes.\n2. Add oats, turmeric, garam masala, and salt.\n3. Pour in 1 cup water and bring to boil.\n4. Simmer until oats are soft and mixture thickens.\n5. Serve hot, optionally with coriander on top."
    },
    {
      name: "Greek Veggie Pita",
      type: "lunch",
      img: "/images/meals/veggie_pita.jpg",
      ingredients: ["Pita bread", "Feta cheese", "Sliced cucumber", "Tomatoes", "Olives", "Hummus"],
      instructions: "1. Cut pita open and spread hummus inside.\n2. Layer with cucumber, tomatoes, olives, and feta.\n3. Serve as-is or lightly toasted in a pan."
    },
    {
      name: "Mexican Vegetarian Enchiladas",
      type: "dinner",
      img: "/images/meals/enchiladas.jpg",
      ingredients: ["Corn tortillas", "1 cup black beans", "1 cup shredded cheddar", "Enchilada sauce"],
      instructions: "1. Preheat oven to 375°F (190°C).\n2. Fill each tortilla with black beans and cheese.\n3. Roll tightly and place in baking dish.\n4. Pour enchilada sauce on top and sprinkle extra cheese.\n5. Bake for 20–25 minutes until bubbly."
    }
  ],
  vegan: [
    {
      name: "Korean Tofu & Rice Bowl",
      type: "breakfast",
      img: "/images/meals/tofu_bibimbap.jpg",
      ingredients: ["Tofu", "Cooked rice", "Gochujang", "Sautéed spinach", "Shredded carrots"],
      instructions: "1. Press and cube tofu. Sauté in a pan until golden.\n2. Place rice in bowl, top with tofu, spinach, and carrots.\n3. Drizzle gochujang sauce over top.\n4. Optional: top with sesame seeds."
    },
    {
      name: "Chinese Veggie Stir Fry",
      type: "lunch",
      img: "/images/meals/stir_fry.jpg",
      ingredients: ["Broccoli", "Bell pepper", "Snow peas", "Soy sauce", "Garlic"],
      instructions: "1. Heat oil in a wok.\n2. Add garlic and stir briefly.\n3. Add veggies and stir fry 5–7 minutes.\n4. Add soy sauce and cook 1 more minute.\n5. Serve with steamed rice."
    },
    {
      name: "Spanish Chickpea Stew",
      type: "dinner",
      img: "/images/meals/chickpea_stew.jpg",
      ingredients: ["1 can chickpeas", "1 onion", "1 bell pepper", "Paprika", "Olive oil"],
      instructions: "1. Sauté onions and peppers in olive oil until soft.\n2. Add chickpeas and paprika.\n3. Simmer 20 minutes.\n4. Season and serve hot with bread."
    }
  ]
};

export default function Home() {
  // [Component logic remains unchanged...]
}
