import React, { useState } from "react";

const AddIngredient = () => {
  const [ingredientName, setIngredientName] = useState([]);
  const [amount, setAmount] = useState([]);
  const [color, setColor] = useState([]);

  return (
    <div className="AddIngredient">
      <h3>Dodaj składnik!</h3>
      <form>
        <label htmlFor="nameIngredientF">
          Nazwa składnika:
          <input
            id="nameIngredientF"
            value={ingredientName}
            placeholder="Wpisz nazwę..."
            onChange={(event) => setIngredientName(event.target.value)}
          />
        </label>
        <label htmlFor="amountIngredientF">
          Ilość składnika:
          <input
            id="amountIngredientF"
            value={amount}
            placeholder="Wpisz ilość..."
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <label htmlFor="addingColor">
          Kolor składnika:
          <input
            id="addingColor"
            value={color}
            placeholder="Wpisz kolor..."
            onChange={(event) => setColor(event.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default AddIngredient;
