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
    <div style={{ fontFamily: 'sans-serif', background: '#f4f4f4', color: '#333', paddingBottom: '40px' }}>
      <header style={{ background: '#2ecc71', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>30-Day Healthy Meal Plan Generator</h1>
        <p>Create a simple, nutritious plan with prep tips and images</p>
      </header>

      <div style={{ maxWidth: '900px', margin: 'auto', background: 'white', padding: '20px' }}>
        <section style={{ marginBottom: '2em' }}>
          <label>Choose a dietary plan:</label>
          <select value={diet} onChange={e => setDiet(e.target.value)}>
            <option value="omnivore">Omnivore</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>

          <button onClick={generatePlan} style={{ marginLeft: '10px' }}>Generate Plan</button>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1em' }}>
          {mealPlan.map(meal => (
            <div key={meal.day} style={{ border: '1px solid #ccc', padding: '1em', borderRadius: '8px', background: '#fafafa' }}>
              <h3>Day {meal.day}</h3>
              <img src={meal.img} alt={meal.name} style={{ width: '100%', borderRadius: '5px' }} />
              <p><strong>Meal:</strong> {meal.name}</p>
              <p><em>Prep:</em> Prep ingredients ahead for easy cooking.</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Meal Prep Tips</h2>
          <ul>
            <li>Batch cook grains and proteins on Sundays</li>
            <li>Chop veggies ahead of time and store in containers</li>
            <li>Use clear containers for easy meal visibility</li>
            <li>Freeze extras for later in the month</li>
          </ul>
        </section>
      </div>

      <footer style={{ background: '#2ecc71', color: 'white', textAlign: 'center', padding: '1em 0' }}>
        <p>&copy; 2025 HealthyMealsNow.com</p>
      </footer>
    </div>
  );
}
