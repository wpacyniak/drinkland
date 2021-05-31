import React from "react";
import { Link, Router } from "@reach/router";
import logo from "./img/drink.png";
import Drinks from "./Drinks";

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
        <Drinks drinks={null} />
      </div>
    </React.StrictMode>
  );
};

export default App;
