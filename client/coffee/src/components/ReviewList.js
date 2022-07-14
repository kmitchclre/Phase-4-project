import React, { useState, useEffect } from "react";
import ReviewCard from "react";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import { useAuth, AuthProvider } from "../useAuth";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  return (
    <main>
      <Reviews reviews={reviews} />
      <br />
      <AddReview reviews={reviews} setReviews={setReviews} user={auth.user} />
    </main>
  );
}

export default ReviewList;
