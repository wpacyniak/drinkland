import React from "react";
import { Link, Router } from "@reach/router";
import logo from "./img/drink.png";

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
      </div>
    </React.StrictMode>
  );
};

export default App;
