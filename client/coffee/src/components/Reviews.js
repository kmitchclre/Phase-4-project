import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

function Reviews({ reviews }) {
  const reviewCards = reviews.map((review) => {
    return <ReviewCard key={review.id} review={review} />;
  });
  return <ul className="mx-20 mt-10 grid grid-cols-3 gap-8">{reviewCards}</ul>;
}

export default Reviews;
