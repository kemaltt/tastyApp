import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((res) => res.json())
      .then((json) => setMeals(json.meals));
  }, [name]);

  return (
    <div className="mealContainer">
      <h1 style={{ color: "#FFAC61" }}>Everything {name}</h1>

      <section className="mealListContainer">
        {meals.map((el, i) => (
          <MealItem
            key={i}
            i={i}
            id={el.idMeal}
            name={el.strMeal}
            img={el.strMealThumb}
          />
        ))}
      </section>
    </div>
  );
};

export default MealList;
