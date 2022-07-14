import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CoffeeCard({ coffee }) {
  const { name, description, img_url, roast, id } = coffee;

  function handleClick() {
    Navigate(`/CoffeePage/${id}`);
  }

  return (
    <div className="flex max-w-md w-full lg:flex py-2 px-4 shadow-xl border border-gray3100">
      <img className="overflow-hidden" src={img_url} alt="/" />
      <div className="space-y-6">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{roast}</p>
        <p>{description}</p>
        <button onClick={handleClick} className="border">
          See Reviews
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;
