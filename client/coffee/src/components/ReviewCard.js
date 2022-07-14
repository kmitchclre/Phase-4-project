import React from "react";

function ReviewCard({ review }) {
  const { text, username, id } = review;
  return (
    <div className="card">
      <p>{text}</p>
      <p>{id}</p>
      {/* <p>{text}</p> */}
    </div>
  );
}

export default ReviewCard;
