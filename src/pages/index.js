import { useState } from 'react';
import mealData from '../../sources/local/mealData';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealTypes = ["Breakfast", "Lunch", "Dinner"];
const plans = Object.keys(mealData);

export default function Home() {
  const [plan, setPlan] = useState('Omnivore');
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [seed, setSeed] = useState(0); // used to trigger rerender for refresh

  const currentDay = days[currentDayIndex];
  const meals = mealData[plan]?.[currentDay];

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
    setCurrentDayIndex(0);
    setSeed(seed + 1); // reset refresh
  };

  const handlePrev = () => {
    setCurrentDayIndex((prev) => (prev - 1 + days.length) % days.length);
  };

  const handleNext = () => {
    setCurrentDayIndex((prev) => (prev + 1) % days.length);
  };

  const handleRefresh = () => {
    setSeed(seed + 1); // just change a value to re-render
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-500 text-white py-4 px-6 flex flex-col items-center">
        <label className="text-lg font-bold mb-2">Select Plan:</label>
        <div className="flex gap-4 items-center">
          <select
            value={plan}
            onChange={handlePlanChange}
            className="text-black p-2 rounded"
          >
            {plans.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Refresh Options
          </button>
        </div>
      </div>

      <main className="max-w-4xl mx-auto py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">{currentDay}</h1>

        {meals ? mealTypes.map((type) => {
          const meal = meals[type];
          return meal ? (
            <div key={type} className="bg-white shadow-md rounded p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-2">{type}</h2>
              <h3 className="text-xl font-bold mb-2">{meal.name}</h3>
              {meal.image && (
                <div className="flex justify-center mb-4">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="max-w-xs h-auto rounded shadow"
                  />
                </div>
              )}
              <p><span className="font-semibold">Ingredients:</span> {meal.ingredients?.join(', ')}</p>
              <p><span className="font-semibold">Instructions:</span> {meal.instructions}</p>
            </div>
          ) : null;
        }) : (
          <p className="text-red-600">No meals available for this plan and day.</p>
        )}

        <div className="flex justify-between mt-10">
          <button
            onClick={handlePrev}
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
          >
            Next
          </button>
        </div>
      </main>

      <footer className="bg-green-500 text-white text-center py-4">
        &copy; 2025 HealthyMealsNow.com
      </footer>
    </div>
  );
}
