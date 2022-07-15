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
  return <ul className="mx-20 mt-10 gap-8">{reviewCards}</ul>;
}

export default Reviews;
