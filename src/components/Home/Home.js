import React from "react";

const Home = () => {
  return (
    <main>
      {/* Hero Area */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center md:my-5">
          <div className="my-5 md:my-0 text-3xl md:text-6xl font-bold">
            <h1 className="text-orange-700">YOUR NEXT PHONE</h1>
            <h1 className="">YOUR BEST PHONE</h1>
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
      <section>
          
      </section>
    </main>
  );
};

export default Home;
