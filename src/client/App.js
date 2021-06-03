import React from "react";
import { Link, Router } from "@reach/router";
import logo from "./img/drink.png";
import Drinks from "./Drinks";
import Drink from "./Drink";
import AddIngredient from "./AddIngredient";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/details" className="logo">
            <img src={logo} alt="Logo" />
            Drinkland
          </Link>
        </header>
        <Router>
          <Drinks path="/" />
          <Drink path="/details" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

export default App;
