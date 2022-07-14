import React from "react";

function ReviewCard({ review }) {
  const { text } = review;
  return (
    <div className="card">
      <p>{text}</p>
    </div>
  );
}

export default ReviewCard;
