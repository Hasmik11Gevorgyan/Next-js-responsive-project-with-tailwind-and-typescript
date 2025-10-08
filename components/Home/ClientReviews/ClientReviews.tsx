import React from "react";
import ClientReviewCard from "./ClientReviewCard";

const ClientReviews = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      {/*heading*/}
      <h1 className="text-center text-2xl font-bold text-blue-950">
        What Our Happy Client says{" "}
      </h1>
      <p className="text-center text-sm text-gray-500 w-[90%] md:-[50%] sm:-[75%]">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio maxime
        impedit blanditiis cumque, aliquid et?
      </p>
      {/*cards*/}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] md:w-[50%] sm:w-[75%] mx-auto items-center ">
        <div>
          <ClientReviewCard
            image="/images/u1.jpg"
            name="John Doe"
            rating="4.7"
          />
        </div>

        <div>
          <ClientReviewCard
            image="/images/u2.jpg"
            name="John Doe"
            rating="4.7"
          />
        </div>
        <div>
          <ClientReviewCard
            image="/images/u3.jpg"
            name="John Doe"
            rating="4.7"
          />
        </div>
        <div>
          <ClientReviewCard
            image="/images/u4.jpg"
            name="John Doe"
            rating="4.7"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
