import React from "react";

function ReviewCard({ review }) {
  const { text, user, coffee } = review;
  const { username } = user;
  const { name, img_url } = coffee;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-gray-600 text-base">
      <p>{name}</p>
      <p>{username}</p>
      <p>{text}</p>
      {/* <p>{text}</p> */}
      <button>Delete review</button>
    </div>
  );
}

export default ReviewCard;
