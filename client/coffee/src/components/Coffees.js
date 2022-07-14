import React from "react";
import CoffeeCard from "./CoffeeCard";

function Coffees({ coffees }) {
  const coffeeCards = coffees.map((coffee) => {
    return <CoffeeCard key={coffee.id} coffee={coffee} />;
  });
  return <ul className="mx-20 mt-10 grid grid-cols-3 gap-8">{coffeeCards}</ul>;
}

export default Coffees;
