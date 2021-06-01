import React, { useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const res = await axios.get("/drinks");
    setDrinks(res.data);
  };

  return (
    <div className="Drinks">
      {drinks === null ? (
        <h1>No Drinks 😥</h1>
      ) : (
        drinks.map((drink) => {
          return (
            <Link to={`/drink/${id}`}>
              <div> {drink.name} </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Drinks;
