import React from "react";
import { Link } from "react-router-dom";
import UseReview from "../../Hooks/ReviewHook/UseReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import apple from '../../image/apple.jpg'

const Home = () => {
    const [reviews, setReviews]  = UseReview();
    const lastThreeReview = reviews.slice(-3);
  return (
    <main>
      {/* Hero Area */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center md:my-5">
          <div className="my-5 text-center md:text-left">
            <h1 className="text-blue-500 text-3xl md:text-6xl font-bold">Your Next Phone</h1>
            <h1 className="text-3xl md:text-6xl font-bold">Your New Superpower</h1>
            <p className="md:text-2xl text-blue-700 font-semibold mt-8">Oh. So. Pro. Love the power.
Love the price.</p>
            
          </div>
          <div className="flex justify-center">
            <img
              className="w-3/6 md:w-5/6"
              src={apple}
              alt="apple-phone"
            />
          </div>
        </div>
      </section>
      <section className="my-6 md:my-20">
          <h1 className="md:mb-6 text-3xl md:text-4xl text-center font-bold">Customer Review ({lastThreeReview.length})</h1>
          <div className="grid md:grid-cols-3 gap-4">
        {
            lastThreeReview.map(review => <ReviewCard 
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
