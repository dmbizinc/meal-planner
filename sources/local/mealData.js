const mealData = {
  Omnivore: {
    Monday: {
      Breakfast: {
        name: "Japanese Tamago Breakfast",
        image: "/images/meals/tamago.jpg",
        ingredients: ["Eggs", "Soy Sauce", "Sugar", "Dashi"],
        instructions: "Whisk eggs with seasoning, then pour thin layers into a pan. Cook each layer before rolling and adding the next. Repeat until done, then slice."
      },
      Lunch: {
        name: "Grilled Chicken Panini",
        image: "/images/meals/panini.jpg",
        ingredients: ["Chicken breast", "Mozzarella", "Tomato", "Pesto", "Ciabatta bread"],
        instructions: "Grill chicken, layer with cheese, tomato, and pesto in ciabatta bread, then grill until golden."
      },
      Dinner: {
        name: "Beef Stir Fry",
        image: "/images/meals/stir_fry.jpg",
        ingredients: ["Beef", "Bell peppers", "Onion", "Soy sauce", "Garlic"],
        instructions: "Sauté sliced beef with vegetables in soy sauce and garlic until cooked through."
      }
    }
  },
  Vegetarian: {
    Monday: {
      Breakfast: {
        name: "Masala Oats",
        image: "/images/meals/masala_oats.jpg",
        ingredients: ["Oats", "Carrot", "Peas", "Spices"],
        instructions: "Sauté veggies with spices, then add oats and water to cook into a savory porridge."
      },
      Lunch: {
        name: "Veggie Pita",
        image: "/images/meals/veggie_pita.jpg",
        ingredients: ["Pita", "Hummus", "Cucumber", "Tomato", "Lettuce"],
        instructions: "Fill pita with hummus and chopped fresh vegetables."
      },
      Dinner: {
        name: "Tofu Bibimbap",
        image: "/images/meals/tofu_bibimbap.jpg",
        ingredients: ["Tofu", "Rice", "Spinach", "Carrots", "Gochujang"],
        instructions: "Pan-fry tofu, cook veggies, and serve over rice with gochujang sauce."
      }
    }
  },
  Vegan: {
    Monday: {
      Breakfast: {
        name: "Chickpea Stew",
        image: "/images/meals/chickpea_stew.jpg",
        ingredients: ["Chickpeas", "Tomato", "Garlic", "Onion", "Spices"],
        instructions: "Cook chickpeas with tomato, garlic, onion, and spices for a hearty stew."
      },
      Lunch: {
        name: "Grilled Veggie Wrap",
        image: "/images/meals/veggie_pita.jpg",
        ingredients: ["Tortilla", "Zucchini", "Bell Pepper", "Hummus"],
        instructions: "Grill vegetables and wrap them in tortilla spread with hummus."
      },
      Dinner: {
        name: "Stuffed Peppers",
        image: "/images/meals/stir_fry.jpg",
        ingredients: ["Bell Peppers", "Quinoa", "Black Beans", "Tomato", "Spices"],
        instructions: "Fill bell peppers with cooked quinoa and beans, then bake until soft."
      }
    }
  }
};

export default mealData;
