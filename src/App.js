import React from "react";
import { render } from "react-dom";
import logo from './img/drink.png';

const App = () => {
  return (
    <React.StrictMode>
        <div>
            <header>
                <img className="imgLogo" src={logo} alt="drink"/>
                <h1 className="logoTitle">Drinkland</h1>
            </header>
        </div>
    </React.StrictMode>
    )
};

render(<App />, document.getElementById("root"));
