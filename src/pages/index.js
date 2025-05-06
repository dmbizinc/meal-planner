import { useState } from 'react';

const mealsByDiet = {
  Omnivore: {
    breakfast: [
      {
        name: 'Japanese Tamago Breakfast',
        image: '/images/meals/tamago.jpg',
        ingredients: ['Eggs', 'Soy sauce', 'Sugar', 'Mirin'],
        instructions: [
          'Beat eggs with soy sauce, sugar, and mirin.',
          'Pour a thin layer into a rectangular pan.',
          'Once slightly set, roll the layer and push to one side.',
          'Add another layer and roll again. Repeat until done.',
          'Slice and serve with rice and pickles.'
        ],
      },
      {
        name: 'Masala Oats',
        image: '/images/meals/masala_oats.jpg',
        ingredients: ['Rolled oats', 'Onions', 'Tomatoes', 'Spices'],
        instructions: [
          'Saute onions and tomatoes in a pan.',
          'Add spices and water, bring to boil.',
          'Add oats and cook until thick.',
          'Serve hot with fresh cilantro.'
        ],
      },
    ],
    lunch: [
      {
        name: 'Chicken Panini',
        image: '/images/meals/panini.jpg',
        ingredients: ['Chicken breast', 'Mozzarella', 'Bread', 'Pesto'],
        instructions: [
          'Grill chicken breast.',
          'Layer bread with pesto, chicken, mozzarella.',
          'Grill in panini press until golden.',
          'Serve with mixed greens.'
        ],
      },
      {
        name: 'Beef Stir Fry',
        image: '/images/meals/stir_fry.jpg',
        ingredients: ['Beef strips', 'Mixed vegetables', 'Soy sauce'],
        instructions: [
          'Heat oil in a wok.',
          'Add beef, stir-fry until brown.',
          'Add vegetables and soy sauce.',
          'Cook until veggies are tender-crisp.',
          'Serve with rice.'
        ],
      },
    ],
    dinner: [
      {
        name: 'Argentinian Steak & Chimichurri',
        image: '/images/meals/steak.jpg',
        ingredients: ['Steak', 'Garlic', 'Parsley', 'Olive oil', 'Vinegar'],
        instructions: [
          'Grill steak to desired doneness.',
          'Blend garlic, parsley, oil, and vinegar into chimichurri sauce.',
          'Serve steak topped with sauce.'
        ],
      },
      {
        name: 'Vegetarian Enchiladas',
        image: '/images/meals/enchiladas.jpg',
        ingredients: ['Tortillas', 'Beans', 'Cheese', 'Enchilada sauce'],
        instructions: [
          'Fill tortillas with beans and cheese.',
          'Roll and place in baking dish.',
          'Top with enchilada sauce and bake 20 minutes.',
          'Serve with avocado.'
        ],
      },
    ],
  },
};

export default function Home() {
  const [diet, setDiet] = useState('Omnivore');
  const [dayMeals, setDayMeals] = useState(generateRandomMeals(diet));

  function generateRandomMeals(selectedDiet) {
    const options = mealsByDiet[selectedDiet];
    return {
      breakfast: options.breakfast[Math.floor(Math.random() * options.breakfast.length)],
      lunch: options.lunch[Math.floor(Math.random() * options.lunch.length)],
      dinner: options.dinner[Math.floor(Math.random() * options.dinner.length)],
    };
  }

  function refreshMeals() {
    setDayMeals(generateRandomMeals(diet));
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <label>
          Choose a dietary plan:{' '}
          <select value={diet} onChange={(e) => { setDiet(e.target.value); setDayMeals(generateRandomMeals(e.target.value)); }}>
            <option value="Omnivore">Omnivore</option>
            {/* Add Vegetarian, Vegan etc as needed */}
          </select>
        </label>
        <button onClick={refreshMeals} style={{ backgroundColor: '#28c76f', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 6 }}>
          🔁 Refresh Options
        </button>
      </div>

      {['breakfast', 'lunch', 'dinner'].map((mealType) => {
        const meal = dayMeals[mealType];
        return (
          <div key={mealType} style={{ backgroundColor: '#f8f8f8', padding: 20, marginBottom: 20, borderRadius: 8 }}>
            <h2 style={{ textTransform: 'capitalize' }}>{mealType}</h2>
            <h3>{meal.name}</h3>
            <img src={meal.image} alt={meal.name} style={{ width: '100%', maxWidth: 400, height: 'auto', borderRadius: 8 }} />
            <p><strong>Ingredients:</strong></p>
            <ul>{meal.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            <p><strong>Instructions:</strong></p>
            <ol>{meal.instructions.map((step, idx) => <li key={idx}>{step}</li>)}</ol>
          </div>
        );
      })}

      <footer style={{ marginTop: 40, padding: 20, backgroundColor: '#28c76f', color: 'white', textAlign: 'center' }}>
        &copy; 2025 HealthyMealsNow.com
      </footer>
    </div>
  );
}
