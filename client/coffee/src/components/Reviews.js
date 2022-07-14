import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

function Reviews({ reviews }) {
  const reviewCards = reviews.map((review) => {
    return <ReviewCard key={review.id} review={review} />;
  });
  return <ul className="cards">{reviewCards}</ul>;
}

export default Reviews;
