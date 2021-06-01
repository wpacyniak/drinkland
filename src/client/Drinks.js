import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/drinks/")
      .then((response) => {
        setDrinks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setDrinks]);

  return (
    <div className="Drinks">
      {drinks === null ? (
        <h1>No Drinks 😥</h1>
      ) : (
        drinks.map((drink) => {
          return <div key={drink._id}> {drink.drinkName} </div>;
        })
      )}
    </div>
  );
};

export default Drinks;
