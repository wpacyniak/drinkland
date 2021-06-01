import React, { useState } from "react";
import axios from "axios";

const AddDrink = () => {
  const [drinkName, setDrinkName] = useState([]);

  function submitAdding(e) {
    const item = {
      drinkName: { drinkName },
    };
    axios
      .post("http://localhost:3000/drinks/add", item)
      .then((res) => console.log(res.data));

    setDrinkName([]);
  }

  return (
    <div className="AddDrink">
      <h3>Dodaj drink!</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitAdding(this);
        }}
      >
        <label htmlFor="addingDrink">
          Nazwa drinka:
          <input
            id="addingDrink"
            value={drinkName}
            placeholder="Wpisz nazwę..."
            onChange={(event) => setDrinkName(event.target.value)}
          />
        </label>
        <button>Dodaj!</button>
      </form>
    </div>
  );
};

export default AddDrink;
