import { useState } from 'react';

const meals = {
  omnivore: [
    { name: "Grilled Chicken Bowl", img: "https://via.placeholder.com/300x200?text=Chicken+Bowl" },
    { name: "Beef Stir Fry", img: "https://via.placeholder.com/300x200?text=Beef+Stir+Fry" },
    { name: "Salmon & Veggies", img: "https://via.placeholder.com/300x200?text=Salmon+%26+Veggies" },
    { name: "Turkey Meatballs & Quinoa", img: "https://via.placeholder.com/300x200?text=Turkey+Meatballs" },
    { name: "Shrimp Tacos", img: "https://via.placeholder.com/300x200?text=Shrimp+Tacos" },
    { name: "Chicken Fajita Bowl", img: "https://via.placeholder.com/300x200?text=Chicken+Fajita" }
  ],
  vegetarian: [
    { name: "Quinoa Veggie Bowl", img: "https://via.placeholder.com/300x200?text=Quinoa+Veggies" },
    { name: "Veggie Stir Fry", img: "https://via.placeholder.com/300x200?text=Veggie+Stir+Fry" },
    { name: "Lentil Soup", img: "https://via.placeholder.com/300x200?text=Lentil+Soup" },
    { name: "Stuffed Bell Peppers", img: "https://via.placeholder.com/300x200?text=Stuffed+Peppers" },
    { name: "Vegetarian Chili", img: "https://via.placeholder.com/300x200?text=Veg+Chili" },
    { name: "Zucchini Noodles", img: "https://via.placeholder.com/300x200?text=Zoodles" }
  ],
  vegan: [
    { name: "Tofu & Rice Bowl", img: "https://via.placeholder.com/300x200?text=Tofu+Rice" },
    { name: "Chickpea Salad", img: "https://via.placeholder.com/300x200?text=Chickpea+Salad" },
    { name: "Vegan Pasta", img: "https://via.placeholder.com/300x200?text=Vegan+Pasta" },
    { name: "Sweet Potato & Kale Bowl", img: "https://via.placeholder.com/300x200?text=Sweet+Potato+Kale" },
    { name: "Black Bean Tacos", img: "https://via.placeholder.com/300x200?text=Bean+Tacos" },
    { name: "Mushroom Stir Fry", img: "https://via.placeholder.com/300x200?text=Mushroom+Stir+Fry" }
  ]
};

export default function Home() {
  const [diet, setDiet] = useState('omnivore');
  const [mealPlan, setMealPlan] = useState([]);

  const generatePlan = () => {
    const selectedMeals = meals[diet];
    const plan = Array.from({ length: 30 }, (_, i) => {
      const meal = selectedMeals[Math.floor(Math.random() * selectedMeals.length)];
      return { ...meal, day: i + 1 };
    });
    setMealPlan(plan);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f4f4f4', color: '#333
