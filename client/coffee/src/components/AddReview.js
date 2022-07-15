import React, { useEffect, useState } from "react";

function AddReview({ user, reviews, setReviews, id }) {
  const [text, setText] = useState("");
  const [deletereview, setDeletereview] = useState([]);

  function handleReviewChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const coffee = JSON.parse(localStorage.getItem("coffee"));
    const newReviewObj = {
      text: text,
      coffee_id: coffee.id,
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

  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem("coffee");
  //   };
  // }, []);

  return (
    <form
      className="px-4 pb-10 grid place-items-center w-full"
      onSubmit={handleSubmit}
    >
      <div className="">
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
