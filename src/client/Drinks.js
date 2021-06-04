import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(0);
  const [drinkName, setDrinkName] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/drinks/")
      .then((response) => {
        setDrinks(response.data);
        setLoading(!{ loading });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loading, setLoading, setDrinks]);

  function submitAdding() {
    const itemDrink = { drinkName };
    axios.post("http://localhost:3000/drinks/add", itemDrink).then((res) => {
      setLoading(!{ loading });
      console.log(res.data);
    });

    setDrinkName([]);
  }

  function deleteItem(id) {
    axios.delete("http://localhost:3000/" + id).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className="Drinks">
      <div className="drinksTitle">
        <h2>Wszystkie drinki: </h2>
      </div>
      <div>
        {drinks.length == 0 ? (
          <h3>No Drinks 😥</h3>
        ) : (
          drinks.map((drink, index) => {
            return (
              <div className="drinkBox" key={drink._id}>
                <div className="drinkItem">
                  <span className="indexNumber">{index + 1}. </span>
                  <Link to={`/details/${drink._id}`} className="linkItem">
                    <span>{drink.drinkName} </span>
                  </Link>
                </div>
                <div className="deleteBox">
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteItem(drink._id);
                      setLoading(true);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      {showForm ? (
        <div className="AddDrink">
          <h3 className="drinksTitle">Dodaj drink!</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitAdding();
              setLoading(true);
              setShowForm(false);
            }}
          >
            <div>
              <label className="labelDrink" htmlFor="addingDrink">
                Nazwa drinka:
                <input
                  className="inputDrink"
                  id="addingDrink"
                  value={drinkName}
                  placeholder="Wpisz nazwę..."
                  onChange={(event) => setDrinkName(event.target.value)}
                />
              </label>
            </div>
            <div>
              <button className="addDrinkButton">Dodaj!</button>
            </div>
          </form>
        </div>
      ) : null}

      <div className="addBox">
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

export default Drinks;
