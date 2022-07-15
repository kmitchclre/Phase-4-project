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
    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <div className="border rounded">{username}</div>
      <br />
      <p>{text}</p>
      <img src={img_url} />
      {/* <p>{text}</p> */}
      <br />
      <form onSubmit={handleUpdateReview}>
        <input
          class="placeholder:italic"
          type="string"
          placeholder="Edit review..."
          onChange={(e) => setUpdatedReview(e.target.value)}
        />
        <button type="submit">Change</button>
      </form>
      <button className="hover:bg-gray-300" onClick={handleDelete}>
        Delete review
      </button>
    </div>
  );
}

export default ReviewCard;
