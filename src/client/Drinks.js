import React from "react";
import { Link } from "@reach/router";

const Drinks = ({ drinks }) => {
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
