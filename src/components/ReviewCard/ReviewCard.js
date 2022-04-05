import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";

const ReviewCard = ({ review }) => {
  const { name, picture, rating, discription } = review;
  return (
    <div className="max-w-sm md:max-w-md mx-auto max-h-fit py-4 px-6 bg-white drop-shadow-xl rounded-lg mt-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={picture}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-indigo-500 text-2xl font-semibold">{name}</h2>
        <div className="flex items-center">Rating : 
        <div className="ml-1 mt-1">
          {
            <Rating
              
              initialRating={rating}
              emptySymbol={<AiTwotoneStar />}
              fullSymbol={<AiTwotoneStar style={{ color: "goldenrod" }} />}
              readonly
            ></Rating>
          }
        </div>
        </div>
        <p className="mt-2 text-gray-600">{discription}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
