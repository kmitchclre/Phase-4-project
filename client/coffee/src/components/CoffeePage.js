import React, { useState, useEffect } from "react";
import Coffees from "./Coffees";
import background from "../assets/background.jpg";

function CoffeePage() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("/coffees", {
      mode: "cors",
      credentials: "include",
    })
      .then((r) => r.json())
      .then((coffeeArray) => {
        setCoffees(coffeeArray);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/me")
  //   .then((response) => {
  //     if(response.ok) {
  //       response.json().then((user) => SpeechSynthesisUtterance(user))
  //     }
  //   })
  // }, []);
  return (
    <div>
      <Coffees coffees={coffees} />
    </div>
  );
}

export default CoffeePage;
