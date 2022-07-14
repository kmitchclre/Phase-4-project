import React from "react";

function CoffeeCard({ coffee }) {
  const { name, description, img_url, roast } = coffee;

  return (
    <div className="flex max-w-md w-full lg:flex py-2 px-4 shadow-xl border border-gray3100">
      <img className="overflow-hidden" src={img_url} alt="/" />
      <div className="space-y-6">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{roast}</p>
        <p>{description}</p>
        <button className="border">See Reviews</button>
      </div>
    </div>
  );
}

export default CoffeeCard;
