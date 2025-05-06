import React, { useEffect, useState } from "react";
import Image from "next/image";

const allMeals = {
  Omnivore: [
    {
      day: "Monday",
      meals: {
        Breakfast: {
          name: "Japanese Tamago",
          image: "/images/meals/tamago.jpg",
          ingredients: ["Eggs", "Soy sauce", "Sugar", "Oil"],
          instructions:
            "Beat eggs with soy sauce and sugar. In a tamago pan, pour a thin layer, cook until set, roll to one side, then repeat layering and rolling to form layers."
        },
        Lunch: {
          name: "Steak Bowl",
          image: "/images/meals/steak.jpg",
          ingredients: ["Steak", "Rice", "Broccoli", "Teriyaki sauce"],
          instructions:
            "Grill steak, steam broccoli, and serve over rice drizzled with teriyaki sauce."
        },
        Dinner: {
          name: "Mexican Enchiladas",
          image: "/images/meals/enchiladas.jpg",
          ingredients: ["Tortillas", "Ground beef", "Cheese", "Enchilada sauce"],
          instructions:
            "Fill tortillas with beef, roll, cover with sauce and cheese, and bake."
        }
      }
    }
  ],
  Vegetarian: [
    {
      day: "Monday",
      meals: {
        Breakfast: {
          name: "Masala Oats",
          image: "/images/meals/masala_oats.jpg",
          ingredients: ["Oats", "Carrot", "Peas", "Spices"],
          instructions:
            "Sauté veggies with spices, then add oats and water to cook into a savory porridge."
        },
        Lunch: {
          name: "Veggie Pita",
          image: "/images/meals/veggie_pita.jpg",
          ingredients: ["Pita bread", "Hummus", "Tomato", "Cucumber", "Lettuce"],
          instructions:
            "Spread hummus in pita and fill with chopped fresh veggies."
        },
        Dinner: {
          name: "Chickpea Stew",
          image: "/images/meals/chickpea_stew.jpg",
          ingredients: ["Chickpeas", "Tomatoes", "Carrots", "Spices"],
          instructions:
            "Simmer all ingredients until soft and stew-like."
        }
      }
    }
  ],
  Vegan: [
    {
      day: "Monday",
      meals: {
        Breakfast: {
          name: "Tofu Bibimbap",
          image: "/images/meals/tofu_bibimbap.jpg",
          ingredients: ["Tofu", "Spinach", "Carrots", "Rice", "Gochujang"],
          instructions:
            "Pan-fry tofu and serve with veggies over rice, drizzle with gochujang sauce."
        },
        Lunch: {
          name: "Veggie Stir Fry",
          image: "/images/meals/stir_fry.jpg",
          ingredients: ["Mixed vegetables", "Soy sauce", "Rice"],
          instructions:
            "Sauté veggies in soy sauce and serve over steamed rice."
        },
        Dinner: {
          name: "Grilled Veg Panini",
          image: "/images/meals/panini.jpg",
          ingredients: ["Bread", "Zucchini", "Peppers", "Vegan cheese"],
          instructions:
            "Grill veggies, layer on bread with vegan cheese, and press into a panini."
        }
      }
    }
  ]
};

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("Omnivore");
  const [mealPlan, setMealPlan] = useState([]);
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    generatePlan();
  }, []);

  const generatePlan = () => {
    const plan = [...allMeals[selectedPlan]];
    setMealPlan(plan);
    setCurrentDay(0);
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
    const plan = [...allMeals[e.target.value]];
    setMealPlan(plan);
    setCurrentDay(0);
  };

  const renderDay = (day) => (
    <div key={day.day} className="day-card">
      <h2>{day.day}</h2>
      {Object.entries(day.meals).map(([mealType, meal]) => (
        <div key={mealType} className="meal-block">
          <h3>{mealType}</h3>
          <p><strong>{meal.name}</strong></p>
          <Image
            src={meal.image}
            alt={meal.name}
            width={300}
            height={200}
            style={{ borderRadius: "10px" }}
          />
          <p><strong>Ingredients:</strong> {meal.ingredients.join(", ")}</p>
          <p><strong>Instructions:</strong> {meal.instructions}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: "#f9f9f9", paddingBottom: "3rem" }}>
      <header style={{ backgroundColor: "#2ecc71", padding: "1rem", color: "white" }}>
        <h1 style={{ margin: 0 }}>Healthy Weekly Meal Planner</h1>
      </header>

      <div style={{ padding: "2rem" }}>
        <label htmlFor="plan" style={{ fontWeight: "bold", marginRight: "1rem" }}>Select Plan:</label>
        <select id="plan" value={selectedPlan} onChange={handlePlanChange}>
          <option value="Omnivore">Omnivore</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>

        <button onClick={() => generatePlan()} style={{ marginLeft: "1rem", padding: "0.5rem 1rem", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "5px" }}>Refresh Options</button>

        <div style={{ marginTop: "2rem" }}>
          {mealPlan.length > 0 && renderDay(mealPlan[currentDay])}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button onClick={() => setCurrentDay(Math.max(0, currentDay - 1))} disabled={currentDay === 0} style={{ marginRight: "1rem" }}>
            Previous
          </button>
          <button onClick={() => setCurrentDay(Math.min(mealPlan.length - 1, currentDay + 1))} disabled={currentDay === mealPlan.length - 1}>
            Next
          </button>
        </div>
      </div>

      <footer style={{ backgroundColor: "#2ecc71", color: "white", padding: "1rem", position: "fixed", width: "100%", bottom: 0 }}>
        © 2025 HealthyMealsNow.com
      </footer>
    </div>
  );
}
