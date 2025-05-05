import { useState } from 'react';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const mealsByDiet = {
  omnivore: [
    {
      name: "Japanese Tamago Breakfast",
      type: "breakfast",
      img: "https://via.placeholder.com/300x200?text=Tamago+Breakfast",
      ingredients: ["2 eggs", "1 tbsp soy sauce", "1 tsp sugar", "white rice"],
      instructions: "Beat eggs with soy sauce and sugar. Cook in layers in a non-stick pan to form tamagoyaki. Serve with rice."
    },
    {
      name: "Italian Chicken Panini",
      type: "lunch",
      img: "https://via.placeholder.com/300x200?text=Chicken+Panini",
      ingredients: ["Grilled chicken", "ciabatta bread", "mozzarella", "basil pesto"],
      instructions: "Assemble sandwich with chicken, mozzarella, and pesto. Grill until crispy and melted."
    },
    {
      name: "Argentinian Steak with Chimichurri",
      type: "dinner",
      img: "https://via.placeholder.com/300x200?text=Steak+Chimichurri",
      ingredients: ["1 ribeye steak", "chimichurri sauce", "roasted potatoes"],
      instructions: "Grill steak to desired doneness. Top with chimichurri. Serve with potatoes."
    }
  ],
  vegetarian: [
    {
      name: "Indian Masala Oats",
      type: "breakfast",
      img: "https://via.placeholder.com/300x200?text=Masala+Oats",
      ingredients: ["1/2 cup oats", "vegetables", "garam masala", "water"],
      instructions: "Cook vegetables with spices and oats. Simmer until thick and soft."
    },
    {
      name: "Greek Veggie Pita",
      type: "lunch",
      img: "https://via.placeholder.com/300x200?text=Veggie+Pita",
      ingredients: ["Pita bread", "feta", "cucumber", "olives", "hummus"],
      instructions: "Layer veggies, hummus and feta in pita. Serve cold or toasted."
    },
    {
      name: "Mexican Vegetarian Enchiladas",
      type: "dinner",
      img: "https://via.placeholder.com/300x200?text=Veggie+Enchiladas",
      ingredients: ["Tortillas", "black beans", "cheddar", "enchilada sauce"],
      instructions: "Fill tortillas with beans and cheese, top with sauce, bake at 375°F for 25 mins."
    }
  ],
  vegan: [
    {
      name: "Korean Tofu & Rice Bowl",
      type: "breakfast",
      img: "https://via.placeholder.com/300x200?text=Tofu+Rice+Korean",
      ingredients: ["1/2 block tofu", "rice", "gochujang sauce", "scallions"],
      instructions: "Pan-fry tofu, serve over rice, drizzle with gochujang, top with scallions."
    },
    {
      name: "Chinese Veggie Stir Fry",
      type: "lunch",
      img: "https://via.placeholder.com/300x200?text=Veggie+Stir+Fry",
      ingredients: ["Mixed vegetables", "soy sauce", "garlic", "rice"],
      instructions: "Stir fry veggies with garlic and soy. Serve with steamed rice."
    },
    {
      name: "Spanish Chickpea Stew",
      type: "dinner",
      img: "https://via.placeholder.com/300x200?text=Chickpea+Stew",
      ingredients: ["Chickpeas", "paprika", "onions", "peppers"],
      instructions: "Simmer chickpeas with onions, garlic, paprika and peppers for 30 minutes."
    }
  ]
};

export default function Home() {
  const [diet, setDiet] = useState('omnivore');
  const [dayIndex, setDayIndex] = useState(0);
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [planGenerated, setPlanGenerated] = useState(false);

  const meals = mealsByDiet[diet];

  const handleGenerate = () => {
    setDayIndex(0);
    setExpandedMeal(null);
    setPlanGenerated(true);
  };

  const handleNext = () => {
    setExpandedMeal(null);
    setDayIndex((prev) => (prev + 1) % 7);
  };

  const handlePrev = () => {
    setExpandedMeal(null);
    setDayIndex((prev) => (prev - 1 + 7) % 7);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f4f4f4', minHeight: '100vh', color: '#333', paddingBottom: '40px' }}>
      <header style={{ background: '#2ecc71', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Weekly Global Meal Planner</h1>
        <p>Explore 7 days of meals from around the world</p>
      </header>

      <div style={{ maxWidth: '900px', margin: 'auto', background: 'white', padding: '20px' }}>
        <section style={{ marginBottom: '2em', textAlign: 'center' }}>
          <label htmlFor="diet" style={{ fontSize: '1.2em' }}>Choose a dietary plan:</label>
          <select
            id="diet"
            value={diet}
            onChange={e => setDiet(e.target.value)}
            style={{ margin: '0 10px', padding: '8px', fontSize: '1em', borderRadius: '4px' }}
          >
            <option value="omnivore">Omnivore</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>

          <button
            onClick={handleGenerate}
            style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Create My Plan
          </button>
        </section>

        {planGenerated && (
          <section style={{ textAlign: 'center' }}>
            <h2>{days[dayIndex]}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', marginBottom: '1em' }}>
              <button onClick={handlePrev}>⬅️ Previous</button>
              <button onClick={handleNext}>Next ➡️</button>
            </div>
            {['breakfast', 'lunch', 'dinner'].map(type => {
              const meal = meals.find(m => m.type === type);
              return (
                <div key={type} onClick={() => setExpandedMeal(type === expandedMeal ? null : type)} style={{ cursor: 'pointer', margin: '1em auto', maxWidth: '600px', border: '1px solid #ccc', borderRadius: '8px', padding: '1em', background: '#fafafa' }}>
                  <h3 style={{ textTransform: 'capitalize' }}>{type}</h3>
                  <img src={meal.img} alt={meal.name} style={{ width: '100%', borderRadius: '6px' }} />
                  <p><strong>{meal.name}</strong></p>
                  {expandedMeal === type && (
                    <div style={{ textAlign: 'left' }}>
                      <h4>Ingredients</h4>
                      <ul>{meal.ingredients.map((item, i) => <li key={i}>{item}</li>)}</ul>
                      <h4>Instructions</h4>
                      <p>{meal.instructions}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}
      </div>

      <footer style={{ background: '#2ecc71', color: 'white', textAlign: 'center', padding: '1em 0' }}>
        <p>&copy; 2025 HealthyMealsNow.com</p>
      </footer>
    </div>
  );
}
