import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchItem from "./SearchItem";

export default function Search() {
  const [data, setData] = useState([]);

  let { input } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);

  return (
    <div className="searchContainer">
      <h1 style={{ color: "orange" }}>
        {data
          ? `${data.length} results found for "${input}" `
          : `There is no matching data...`}
      </h1>

      <div className="searchListContainer">
        {data
          ? data.map((el, i) => (
            <SearchItem
              i={i}
              key={i}
              id={el.idMeal}
              name={el.strMeal}
              img={el.strMealThumb}
            />
          ))
          : null}
      </div>
    </div>
  );
}
