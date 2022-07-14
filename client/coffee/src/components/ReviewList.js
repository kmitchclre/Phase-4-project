import React, { useState, useEffect } from "react";
import ReviewCard from "react";
import Reviews from "./Reviews";
import NavBar from "./NavBar";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  return (
    <main>
      <NavBar />
      <Reviews reviews={reviews} />
    </main>
  );
}

export default ReviewList;
