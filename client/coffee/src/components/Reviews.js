import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

function Reviews({ reviews, onRemoveReview, onUpdateReview }) {
  const reviewCards = reviews.map((review) => {
    return (
      <ReviewCard
        key={review.id}
        review={review}
        onRemoveReview={onRemoveReview}
        onUpdateReview={onUpdateReview}
      />
    );
  });
  return (
    <ul className="mx-20 mt-10 grid grid-cols-3 gap-3 border border-gray-400 shadow-md dark:bg-gray-800 dark:border-gray-500 ">
      {reviewCards}
    </ul>
  );
}

export default Reviews;
