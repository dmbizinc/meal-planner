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
  const [diet, setDiet] = useState('omnivore');
  const [dayIndex, setDayIndex] = useState(0);
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [planGenerated, setPlanGenerated] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleGenerate = () => {
    setDayIndex(0);
    setExpandedMeal(null);
    setPlanGenerated(true);
    setRefreshKey(prev => prev + 1);
  };

  const handleNext = () => {
    setExpandedMeal(null);
    setDayIndex((prev) => (prev + 1) % 7);
  };

  const handlePrev = () => {
    setExpandedMeal(null);
    setDayIndex((prev) => (prev - 1 + 7) % 7);
  };

  const handleRefresh = () => {
    setExpandedMeal(null);
    setRefreshKey(prev => prev + 1);
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
            style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginLeft: '10px' }}
          >
            Create My Plan
          </button>

          {planGenerated && (
            <button
              onClick={handleRefresh}
              style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginLeft: '10px' }}
            >
              🔁 Refresh Options
            </button>
          )}
        </section>

        {planGenerated && (
          <section style={{ textAlign: 'center' }}>
            <h2>{days[dayIndex]}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', marginBottom: '1em' }}>
              <button onClick={handlePrev}>⬅️ Previous</button>
              <button onClick={handleNext}>Next ➡️</button>
            </div>
            {['breakfast', 'lunch', 'dinner'].map(type => {
              const options = mealsByDiet[diet].filter(m => m.type === type);
              const meal = options[(dayIndex + refreshKey) % options.length];
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
                      <p style={{ whiteSpace: 'pre-wrap' }}>{meal.instructions}</p>
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
