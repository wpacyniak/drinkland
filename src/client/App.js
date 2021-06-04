import React from "react";
import { Link, Router } from "@reach/router";
import logo from "./img/drink.png";
import Drinks from "./Drinks";
import Drink from "./Drink";

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
        <Router>
          <Drinks path="/" />
          <Drink path="/details/:id" />
        </Router>
        <footer class="footer">
          © 2021{" "}
          <p>
            Ikona w logo: Smashicons z
            <span>
              <a href="www.flaticon.com"> www.flaticon.com</a>
            </span>
          </p>
        </footer>
      </div>
    </React.StrictMode>
  );
};

export default App;
