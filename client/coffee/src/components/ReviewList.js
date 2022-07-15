import React, { useState, useEffect, useCallback } from "react";
import ReviewCard from "react";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import { useAuth, AuthProvider } from "../useAuth";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    const coffee = JSON.parse(localStorage.getItem("coffee"));
    console.log("coffee", coffee);
    fetch(`/reviews?coffee_id=${coffee && coffee.id}`)
      .then((r) => r.json())
      .then((reviews) => {
        console.log("reviews", reviews);
        setReviews(reviews);
      });

    // return () => {
    //   console.log("component unmount here running");
    //   localStorage.removeItem("coffee");
    //   setReviews([]);
    // };
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
