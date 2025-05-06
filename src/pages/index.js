import React, { useState } from 'react';
import Image from 'next/image';
import mealData from '../../sources/local/mealData';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Home() {
  const [plan, setPlan] = useState('Omnivore');
  const [dayIndex, setDayIndex] = useState(0);
  const [meals, setMeals] = useState(generateMeals(plan));

  function generateMeals(planType) {
    const planMeals = mealData[planType];
    return days.map(day => {
      const dayMeals = {};
      ['breakfast', 'lunch', 'dinner'].forEach(type => {
        const options = planMeals[type];
        const randomMeal = options[Math.floor(Math.random() * options.length)];
        dayMeals[type] = randomMeal;
      });
      return { day, ...dayMeals };
    });
  }

  function refreshMeals() {
    setMeals(generateMeals(plan));
  }

  const handlePlanChange = e => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);
    setMeals(generateMeals(selectedPlan));
  };

  const nextDay = () => {
    setDayIndex((dayIndex + 1) % days.length);
  };

  const prevDay = () => {
    setDayIndex((dayIndex - 1 + days.length) % days.length);
  };

  const currentDay = meals[dayIndex];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-green-500 py-4 text-white text-center font-bold text-xl shadow">
        Healthy 7-Day Meal Planner
      </header>

      <div className="flex flex-col items-center my-4 gap-2">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <label htmlFor="plan" className="font-semibold">Select Plan:</label>
          <select
            id="plan"
            value={plan}
            onChange={handlePlanChange}
            className="px-3 py-1 border rounded shadow"
          >
            <option value="Omnivore">Omnivore</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
          </select>

          <button
            onClick={refreshMeals}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
          >
            Refresh Options
          </button>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-3xl font-semibold">{currentDay.day}</h2>
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6 px-4 mb-6">
        {['breakfast', 'lunch', 'dinner'].map(mealType => {
          const meal = currentDay[mealType];
          return (
            <div key={mealType} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-semibold text-center mb-2 capitalize">{mealType}</h3>
              <p className="text-center text-xl font-bold mb-2">{meal.name}</p>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <img
                    src={`/images/meals/${meal.image}`}
                    alt={meal.name}
                    className="rounded-lg shadow-md max-w-xs mx-auto"
                    style={{ maxHeight: '250px' }}
                  />
                </div>
                <div className="text-left w-full md:w-3/4">
                  <p><span className="font-semibold">Ingredients:</span> {meal.ingredients.join(', ')}</p>
                  <p><span className="font-semibold">Instructions:</span> {meal.instructions}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center w-full max-w-xs mb-8">
        <button
          onClick={prevDay}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={nextDay}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Next
        </button>
      </div>

      <footer className="w-full bg-green-500 py-2 text-center text-white">
        &copy; 2025 HealthyMealsNow.com
      </footer>
    </div>
  );
}
