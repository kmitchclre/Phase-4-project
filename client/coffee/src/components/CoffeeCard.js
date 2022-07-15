import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CoffeeCard({ coffee }) {
  const { name, description, img_url, roast, id } = coffee;
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/reviewlist/${id}`);
  }

  return (
    <div className="flex max-w-md w-full lg:flex py-2 px-2 shadow-xl border border-gray3100">
      <img className="" src={img_url} alt="/" />
      <div className="space-y-6">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{roast}</p>
        <p>{description}</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          See Reviews
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;
