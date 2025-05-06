import { useState } from 'react';
import mealData from '../../sources/local/mealData';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState('Omnivore');
  const [dayIndex, setDayIndex] = useState(0);
  const [weekMeals, setWeekMeals] = useState(generateWeeklyMeals(selectedPlan));

  function generateWeeklyMeals(plan) {
    const planMeals = mealData[plan.toLowerCase()] || [];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map(() => {
      return ['breakfast', 'lunch', 'dinner'].map(mealType => {
        const options = planMeals.filter(m => m.type === mealType);
        return options[Math.floor(Math.random() * options.length)];
      });
    });
  }

  function handlePlanChange(e) {
    const newPlan = e.target.value;
    setSelectedPlan(newPlan);
    setWeekMeals(generateWeeklyMeals(newPlan));
    setDayIndex(0);
  }

  function refreshMeals() {
    setWeekMeals(generateWeeklyMeals(selectedPlan));
  }

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="min-h-screen bg-gray-50 text-center">
      <header className="bg-green-500 text-white p-4">
        <h1 className="text-3xl font-bold">Healthy Weekly Meal Planner</h1>
      </header>

      <div className="flex justify-center items-center gap-4 mt-6">
        <label className="font-semibold">Select Plan:</label>
        <select value={selectedPlan} onChange={handlePlanChange} className="p-2 border rounded">
          <option value="Omnivore">Omnivore</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
        <button
          onClick={refreshMeals}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refresh Options
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold">{daysOfWeek[dayIndex]}</h2>
        {['Breakfast', 'Lunch', 'Dinner'].map((mealName, i) => {
          const meal = weekMeals[dayIndex]?.[i];
          return (
            <div key={i} className="max-w-md mx-auto bg-white rounded shadow my-4 p-4">
              <h3 className="text-xl font-semibold">{mealName}</h3>
              <p className="text-lg font-medium">{meal?.name}</p>
              {meal?.image && (
                <img
                  src={`/images/meals/${meal.image}`}
                  alt={meal.name}
                  className="w-full h-auto mt-2 rounded"
                />
              )}
              {meal?.ingredients?.length > 0 && (
                <p className="mt-2">
                  <span className="font-semibold">Ingredients:</span> {meal.ingredients.join(', ')}
                </p>
              )}
              {meal?.instructions && (
                <p>
                  <span className="font-semibold">Instructions:</span> {meal.instructions}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setDayIndex((dayIndex + 6) % 7)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Previous
        </button>
        <button
          onClick={() => setDayIndex((dayIndex + 1) % 7)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Next
        </button>
      </div>

      <footer className="bg-green-500 text-white p-4 mt-10">
        <p>© {new Date().getFullYear()} HealthyMealsNow.com</p>
      </footer>
    </div>
  );
}
