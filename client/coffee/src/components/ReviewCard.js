import React, { useState } from "react";

function ReviewCard({ review, onRemoveReview, onUpdateReview }) {
  const { text, user, coffee, id } = review;
  const { username } = user;
  const { name, img_url } = coffee;
  const [deletereview, setDeletereview] = useState([]);
  const [updatedReview, setUpdatedReview] = useState([]);
  const [updatedText, setUpdatedText] = useState([]);

  function handleDelete() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
    // .then((r) => r.json())
    // .then((emptyObj) => {
    //   console.log(emptyObj);
    // });
    onRemoveReview(id);
  }

  function handleUpdateReview() {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: updatedReview }),
    })
      .then((r) => r.json())
      .then((updatedReview) => {
        onUpdateReview(updatedReview);
      });
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-gray-600 text-base ">
      <p>{name}</p>
      <p>{username}</p>
      <p>{text}</p>
      {/* <p>{text}</p> */}
      <button className="" onClick={handleDelete}>
        Delete review
      </button>
      <form onSubmit={handleUpdateReview}>
        <input
          type="string"
          placeholder="Edit review..."
          onChange={(e) => setUpdatedReview(e.target.value)}
        />
        <button type="submit">Change</button>
      </form>
    </div>
  );
}

export default ReviewCard;
