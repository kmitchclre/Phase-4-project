import React, { useEffect, useState } from "react";

function AddReview({ user, reviews, setReviews, id }) {
  const [text, setText] = useState("");
  const [deletereview, setDeletereview] = useState([]);

  function handleReviewChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newReviewObj = {
      text: text,
      coffee_id: 1,
      user_id: user.id,
    };
    fetch("reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReviewObj),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setReviews([data, ...reviews]);
      });
  }

  return (
    <form className="mx-10 mt-10 gap-8" onSubmit={handleSubmit}>
      <div className="shadow-xl">
        <textarea
          name="review"
          type="string"
          value={text}
          placeholder="Write a review..."
          onChange={handleReviewChange}
        ></textarea>
        <br />
        <button>Submit</button>
      </div>
    </form>
  );
}
export default AddReview;
