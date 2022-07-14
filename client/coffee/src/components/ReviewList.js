import React, { useState, useEffect } from "react";
import ReviewCard from "react";
import Reviews from "./Reviews";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((r) => r.json())
      .then((reviews) => console.log(reviews));
  }, []);

  return (
    <main>
      <Reviews reviews={reviews} />
    </main>
  );
}

export default ReviewList;
