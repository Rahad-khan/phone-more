import React from "react";
import {AiTwotoneStar} from 'react-icons/ai'

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
        <p className="flex items-center">Rating : {rating} <AiTwotoneStar className="text-yellow-500"/> </p>
        <p className="mt-2 text-gray-600">{discription}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
