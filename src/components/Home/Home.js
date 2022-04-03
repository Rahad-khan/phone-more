import React from "react";
import { Link } from "react-router-dom";
import UseReview from "../../Hooks/ReviewHook/UseReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const Home = () => {
    const [reviews, setReviews]  = UseReview();
    const firstThreeReview = reviews.slice(0,3);
  return (
    <main>
      {/* Hero Area */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center md:my-5">
          <div className="my-5 md:my-0 text-3xl md:text-6xl font-bold">
            <h1 className="text-orange-700">YOUR NEXT PHONE</h1>
            <h1>YOUR BEST PHONE</h1>
          </div>
          <div className="flex justify-center">
            <img
              className="w-3/6 md:w-5/6"
              src={require("../../image/apple.jpg")}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="mt-6">
          <h1 className="md:mb-6 text-3xl md:text-4xl text-center font-bold">Customer Review ({firstThreeReview.length})</h1>
          <div className="grid md:grid-cols-3 gap-4">
        {
            firstThreeReview.map(review => <ReviewCard 
                key={review.id}
                review = {review}
                ></ReviewCard>)
        }
          </div>
          <Link to='/reviews'>
          <button className="block mt-4 w-2/5 mx-auto bg-sky-500 hover:bg-sky-700 px-5 py-2 text-lg leading-5 rounded-full font-semibold text-white">See All Reviews</button>
          </Link>
      </section>
    </main>
  );
};

export default Home;
