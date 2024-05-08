import { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
  const [meals, setMeals] = useState([])
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Rendang')
      .then((res) => {
        setMeals(res.data.meals);
      })
  }, [])
  
  return (
    <div>
      {meals.map((meal) => (
      <h1>{meal.strMeal}</h1>
      ))}
    </div>
  );
};
export default Axios
