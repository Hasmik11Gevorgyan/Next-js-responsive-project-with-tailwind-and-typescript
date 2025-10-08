import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <h1 className="mb-4 mt-6 text-center text-2xl text-blue-950 font-bold">
        Choose the plan that is just for you
      </h1>
      <p className="mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid
        dolor, fugiat corporis nobis officiis incidunt aliquam iusto deserunt
        aspernatur!
      </p>
      <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        <div>
          <PriceCard time="3 month" price="39.9" />
        </div>
        <div>
          <PriceCard time="12 month" price="19.9" />
        </div>
        <div>
          <PriceCard time="Life Time" price="29.9" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
