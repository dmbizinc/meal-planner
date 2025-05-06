import { useState } from "react";
import mealData from "../../sources/local/mealData";

const daysOfWeek = ["Monday"];
const mealTypes = ["Breakfast", "Lunch", "Dinner"];
const dietPlans = Object.keys(mealData);

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("Omnivore");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
    setCurrentDayIndex(0);
  };

  const handleRefresh = () => {
    // Just trigger a state update to refresh displayed options
    setCurrentDayIndex((prev) => (prev + 0));
  };

  const handlePrev = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : daysOfWeek.length - 1
    );
  };

  const handleNext = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex < daysOfWeek.length - 1 ? prevIndex + 1 : 0
    );
  };

  const currentDay = daysOfWeek[currentDayIndex];
  const meals = mealData[selectedPlan]?.[currentDay];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-500 p-4 text-white flex flex-col items-center">
        <label className="font-bold text-lg mb-2" htmlFor="plan-select">
          Select Plan:
        </label>
        <select
          id="plan-select"
          value={selectedPlan}
          onChange={handlePlanChange}
          className="text-black p-2 rounded"
        >
          {dietPlans.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </select>
        <button
          onClick={handleRefresh}
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
        >
          Refresh Options
        </button>
      </div>

      <div className="text-center my-6">
        <h1 className="text-4xl font-bold mb-4">{currentDay}</h1>

        {meals ? (
          mealTypes.map((type) => {
            const meal = meals[type];
            return (
              <div
                key={type}
                className="bg-white shadow-md rounded-lg mx-auto max-w-xl mb-6 p-4"
              >
                <h2 className="text-2xl font-semibold mb-2">{type}</h2>
                <h3 className="text-xl font-bold mb-2">{meal.name}</h3>
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="mx-auto w-full max-w-sm rounded shadow mb-4"
                />
                <p>
                  <span className="font-semibold">Ingredients:</span>{" "}
                  {meal.ingredients?.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Instructions:</span>{" "}
                  {meal.instructions}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-red-500">No meals available for this plan.</p>
        )}

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>

      <footer className="bg-green-500 text-white text-center p-4 mt-6">
        © 2025 HealthyMealsNow.com
      </footer>
    </div>
  );
}
