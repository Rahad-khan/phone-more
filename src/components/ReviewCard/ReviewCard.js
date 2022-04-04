import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";

const ReviewCard = ({ review }) => {
  const { name, picture, rating, discription } = review;
  return (
    <div className="max-w-md max-h-fit py-4 px-6 bg-white drop-shadow-xl rounded-lg mt-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={picture}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-indigo-500 text-3xl font-semibold">{name}</h2>
        <div className="flex items-center">
          <p>Rating : </p>
          {
            <Rating
              initialRating={rating}
              emptySymbol={<AiTwotoneStar />}
              fullSymbol={<AiTwotoneStar style={{ color: "goldenrod" }} />}
              readonly
            ></Rating>
          }
        </div>
        <p className="mt-2 text-gray-600">{discription}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
