import React, { useState } from 'react';
import mealData from '../../sources/local/mealData';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const plans = ['Omnivore', 'Vegetarian', 'Vegan'];
const meals = ['Breakfast', 'Lunch', 'Dinner'];

const getRandomMealSet = (plan, day) => {
  const selectedDay = mealData[plan]?.[day];
  return selectedDay || {};
};

export default function HomePage() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('Omnivore');
  const [dailyMeals, setDailyMeals] = useState(() => getRandomMealSet('Omnivore', days[0]));

  const handlePlanChange = (e) => {
    const newPlan = e.target.value;
    setSelectedPlan(newPlan);
    setDailyMeals(getRandomMealSet(newPlan, days[currentDayIndex]));
  };

  const handleRefresh = () => {
    setDailyMeals(getRandomMealSet(selectedPlan, days[currentDayIndex]));
  };

  const nextDay = () => {
    const nextIndex = (currentDayIndex + 1) % days.length;
    setCurrentDayIndex(nextIndex);
    setDailyMeals(getRandomMealSet(selectedPlan, days[nextIndex]));
  };

  const prevDay = () => {
    const prevIndex = (currentDayIndex - 1 + days.length) % days.length;
    setCurrentDayIndex(prevIndex);
    setDailyMeals(getRandomMealSet(selectedPlan, days[prevIndex]));
  };

  const currentDay = days[currentDayIndex];

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f9f9f9', minHeight: '100vh', paddingBottom: '2rem' }}>
      <div style={{ background: '#2ecc71', padding: '1rem 2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong>Select Plan:</strong>
          <select onChange={handlePlanChange} value={selectedPlan} style={{ marginLeft: '0.5rem', padding: '0.3rem' }}>
            {plans.map(plan => <option key={plan} value={plan}>{plan}</option>)}
          </select>
        </div>
        <button onClick={handleRefresh} style={{ backgroundColor: '#3498db', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px' }}>Refresh Options</button>
      </div>

      <h1 style={{ textAlign: 'center', margin: '1.5rem 0' }}>{currentDay}</h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '0 1rem' }}>
        {meals.map((mealType) => {
          const meal = dailyMeals[mealType];
          return meal ? (
            <div key={mealType} style={{ background: 'white', padding: '1rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '700px' }}>
              <h2 style={{ textAlign: 'center' }}>{mealType}</h2>
              <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>{meal.name}</h3>
              {meal.image && <img src={meal.image} alt={meal.name} style={{ display: 'block', maxWidth: '100%', height: 'auto', margin: '1rem auto', borderRadius: '10px' }} />}
              <p><strong>Ingredients:</strong> {meal.ingredients?.join(', ')}</p>
              <p><strong>Instructions:</strong> {meal.instructions}</p>
            </div>
          ) : null;
        })}
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={prevDay} style={{ padding: '0.5rem 1.5rem', background: '#95a5a6', border: 'none', borderRadius: '5px', color: 'white' }}>Previous</button>
        <button onClick={nextDay} style={{ padding: '0.5rem 1.5rem', background: '#95a5a6', border: 'none', borderRadius: '5px', color: 'white' }}>Next</button>
      </div>

      <footer style={{ marginTop: '3rem', textAlign: 'center', background: '#2ecc71', padding: '1rem', color: 'white' }}>
        &copy; 2025 HealthyMealsNow.com
      </footer>
    </div>
  );
}
