import React, { useState, useEffect } from "react";
import Coffees from "./Coffees";
import NavBar from "./NavBar";

function CoffeePage() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffees", {
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
    <main>
      <NavBar />
      <Coffees coffees={coffees} />
    </main>
  );
}

export default CoffeePage;
