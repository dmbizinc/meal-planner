import { useState } from 'react';

const meals = {
  omnivore: [
    {
      name: "Grilled Chicken Bowl",
      img: "https://via.placeholder.com/300x200?text=Chicken+Bowl",
      ingredients: ["1 chicken breast", "1 cup rice", "1/2 cup steamed broccoli"],
      instructions: "Grill chicken, cook rice, steam broccoli. Assemble in bowl."
    },
    {
      name: "Beef Stir Fry",
      img: "https://via.placeholder.com/300x200?text=Beef+Stir+Fry",
      ingredients: ["1/2 lb beef strips", "1 cup mixed vegetables", "2 tbsp soy sauce"],
      instructions: "Stir fry beef and veggies in soy sauce over medium heat."
    }
  ],
  vegetarian: [
    {
      name: "Quinoa Veggie Bowl",
      img: "https://via.placeholder.com/300x200?text=Quinoa+Veggies",
      ingredients: ["1 cup cooked quinoa", "1/2 cup roasted veggies", "hummus"],
      instructions: "Combine quinoa and veggies, top with hummus."
    },
    {
      name: "Lentil Soup",
      img: "https://via.placeholder.com/300x200?text=Lentil+Soup",
      ingredients: ["1 cup lentils", "1 carrot", "1 celery stalk", "4 cups broth"],
      instructions: "Simmer all ingredients for 30 minutes until tender."
    }
  ],
  vegan: [
    {
      name: "Tofu & Rice Bowl",
      img: "https://via.placeholder.com/300x200?text=Tofu+Rice",
      ingredients: ["1/2 block tofu", "1 cup rice", "soy sauce"],
      instructions: "Pan fry tofu, cook rice, combine and drizzle with soy sauce."
    },
    {
      name: "Chickpea Salad",
      img: "https://via.placeholder.com/300x200?text=Chickpea+Salad",
      ingredients: ["1 can chickpeas", "1/2 cucumber", "1/4 onion", "olive oil, lemon juice"],
      instructions: "Mix all ingredients in a bowl and chill."
    }
  ]
};

export default function Home() {
  const [diet, setDiet] = useState('omnivore');
  const [mealPlan, setMealPlan] = useState([]);
  const [planCreated, setPlanCreated] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);

  const generatePlan = () => {
    const selectedMeals = meals[diet];
    const plan = Array.from({ length: 30 }, (_, i) => {
      const meal = selectedMeals[Math.floor(Math.random() * selectedMeals.length)];
      return { ...meal, day: i + 1 };
    });
    setMealPlan(plan);
    setPlanCreated(true);
    setExpandedDay(null);
  };

  const toggleExpand = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f4f4f4', color: '#333', paddingBottom: '40px' }}>
      <header style={{ background: '#2ecc71', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>30-Day Healthy Meal Plan Generator</h1>
        <p>Create a simple, nutritious plan with prep tips and images</p>
      </header>

      <div style={{ maxWidth: '900px', margin: 'auto', background: 'white', padding: '20px' }}>
        <section style={{ marginBottom: '2em', textAlign: 'center' }}>
          <label htmlFor="diet" style={{ marginRight: '10px', fontSize: '1.2em' }}>Choose a dietary plan:</label>
          <select
            id="diet"
            value={diet}
            onChange={e => setDiet(e.target.value)}
            style={{ padding: '8px 12px', fontSize: '1em', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="omnivore">Omnivore</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>

          <button
            onClick={generatePlan}
            style={{ marginLeft: '15px', padding: '10px 20px', fontSize: '1em', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            onMouseOver={e => e.target.style.backgroundColor = '#27ae60'}
            onMouseOut={e => e.target.style.backgroundColor = '#2ecc71'}
          >
            Create My Plan
          </button>
        </section>

        {planCreated && (
          <>
            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1em' }}>
              {mealPlan.map(meal => (
                <div
                  key={meal.day}
                  style={{ border: '1px solid #ccc', padding: '1em', borderRadius: '8px', background: '#fafafa', cursor: 'pointer' }}
                  onClick={() => toggleExpand(meal.day)}
                >
                  <h3>Day {meal.day}</h3>
                  <img src={meal.img} alt={meal.name} style={{ width: '100%', borderRadius: '5px' }} />
                  <p><strong>Meal:</strong> {meal.name}</p>
                  <p><em>Prep:</em> Prep ingredients ahead for easy cooking.</p>
                  {expandedDay === meal.day && (
                    <div style={{ marginTop: '1em' }}>
                      <h4>Ingredients</h4>
                      <ul>
                        {meal.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                      <h4>Instructions</h4>
                      <p>{meal.instructions}</p>
                    </div>
                  )}
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
          </>
        )}
      </div>

      <footer style={{ background: '#2ecc71', color: 'white', textAlign: 'center', padding: '1em 0' }}>
        <p>&copy; 2025 HealthyMealsNow.com</p>
      </footer>
    </div>
  );
}

