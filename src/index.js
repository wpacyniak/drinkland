import React from "react";
import { render } from "react-dom";
import logo from "./img/drink.png";
import { Link, Router } from "@reach/router";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <img className="imgLogo" src={logo} alt="drink" />
            Drinkland
          </Link>
        </header>
        <Router>
          <Drinks path="/" />
          <Drink path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
