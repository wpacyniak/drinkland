import React, { useState, useEffect } from "react";
import axios from "axios";

const Drink = (id) => {
  const [drink, setDrink] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/drinks/" + props.id)
  //     .then((response) => {
  //       setDrink(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return <div>elo</div>;
};

export default Drink;
