import React from "react";
import { Link, Router } from "@reach/router";
import logo from "./img/drink.png";
import Drinks from "./Drinks";
import Drink from "./Drink";
import AddDrink from "./AddDrink";
import AddIngredient from "./AddIngredient";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
            Drinkland
          </Link>
        </header>
        <AddDrink />
        <AddIngredient />
        <Router>
          <Drinks path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

export default App;
