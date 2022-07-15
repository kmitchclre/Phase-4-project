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

  function handleUpdateReview(updatedReview) {
    const updatedReviews = reviews.map((reviewObj) => {
      if (reviewObj.id === updatedReview.id) {
        return updatedReview;
      } else {
        return reviewObj;
      }
    });
    setReviews(updatedReviews);
  }

  function handleRemoveReview(reviewId) {
    const updatedReviews = reviews.filter(
      (reviewObj) => reviewObj.id !== reviewId
    );
    setReviews(updatedReviews);
  }
  return (
    <main>
      <Reviews
        reviews={reviews}
        onRemoveReview={handleRemoveReview}
        onUpdateReview={handleUpdateReview}
      />
      <br />
      <AddReview reviews={reviews} setReviews={setReviews} user={auth.user} />
    </main>
  );
}

export default ReviewList;
