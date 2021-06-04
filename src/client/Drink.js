import React, { useState, useEffect } from "react";
import axios from "axios";

const Drink = (props) => {
  const [drink, setDrink] = useState([]);
  const [ingredients, setIngredient] = useState([]);
  const [loading, setLoading] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [ingredientName, setIngredientName] = useState([]);
  const [amount, setAmount] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/drinks/" + props.id)
      .then((response) => {
        setDrink(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/ingredients/" + props.id)
      .then((response) => {
        setIngredient(response.data);
        setLoading(!{ loading });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loading, setLoading, setIngredient]);

  function deleteItem(id) {
    axios.delete("http://localhost:3000/ingredient/" + id).then((res) => {
      console.log(res.data);
    });
  }

  function submitAdding() {
    const drink_id = drink._id;
    const itemDrink = { ingredientName, amount, color, drink_id };
    axios
      .post("http://localhost:3000/drinks/addIngredient/", itemDrink)
      .then((res) => {
        setLoading(!{ loading });
        console.log(res.data);
      });

    setColor([]);
    setAmount([]);
    setIngredientName([]);
  }

  return (
    <div>
      <div className="IngredientBox">
        <div className="drinkName">{drink.drinkName}</div>
        <table className="ingredientTable">
          <thead>
            <tr className="thead">
              <td>nr</td>
              <td>nazwa</td>
              <td>ilość</td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            {ingredients.map((ingredient, index) => {
              return (
                <tr key={ingredient._id}>
                  <td>{index + 1}. </td>
                  <td>{ingredient.ingredient}</td>
                  <td>{ingredient.amount}</td>
                  <td className="deleteB">
                    <button
                      className="deleteButton ingredientButton"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteItem(ingredient._id);
                        setLoading(true);
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {showForm ? (
          <div className="AddIngredient">
            <h3 className="drinksTitle ingredientTitle">Dodaj składnik!</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitAdding();
                setLoading(true);
                setShowForm(false);
              }}
            >
              <div>
                <label className="labelDrink" htmlFor="addingIngredient">
                  Nazwa składnika:
                  <input
                    className="inputDrink"
                    id="addingIngredient"
                    placeholder="Wpisz nazwę..."
                    onChange={(event) => setIngredientName(event.target.value)}
                    value={ingredientName}
                  />
                </label>
                <label className="labelDrink" htmlFor="addingAmount">
                  Ilość składnika:
                  <input
                    className="inputDrink"
                    id="addingAmount"
                    placeholder="Wpisz ilość..."
                    onChange={(event) => setAmount(event.target.value)}
                    value={amount}
                  />
                </label>
                <label className="labelDrink" htmlFor="addingColor">
                  Kolor składnika:
                  <input
                    className="inputDrink"
                    id="addingColor"
                    placeholder="Podaj kolor..."
                    onChange={(event) => setColor(event.target.value)}
                    value={color}
                  />
                </label>
              </div>
              <div className="addIngredientButton">
                <button className="addDrinkButton">Dodaj!</button>
              </div>
            </form>
          </div>
        ) : null}
      </div>

      <div className="addBox addBoxIngredient">
        <button
          className="addButton"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setShowForm(true);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Drink;
