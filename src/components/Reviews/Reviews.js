import React from "react";
import UseReview from "../../Hooks/ReviewHook/UseReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = UseReview();
  return (
    <main className="my-6">
      <h1 className="md:mb-6 text-3xl md:text-4xl text-center font-bold text-teal-700">Our Customer's Review</h1>
      <div className="grid md:grid-cols-3 gap-4 ">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </main>
  );
};

export default Reviews;
