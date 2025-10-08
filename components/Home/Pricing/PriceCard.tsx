import React from "react";

type Props = {
  time: string;
  price: string;
};

const PriceCard = ({ time, price }: Props) => {
  return (
    <div className="bg-white p-4 relative border-t-4 border-rose-300 rounded-lg">
      <h1 className="text-sky-500 text-xl font-bold">{time} Membership</h1>
      <p className="mt-2 text-sm text-gray-600 items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, fugiat.
      </p>
      <div className="mt-6">
        <div className="font-semibold text-gray-700 text-lg">
          <span className="text-4xl font-bold text-black">
            $ {price} /Month
          </span>
        </div>
      </div>
      {/*button*/}
      <div className="mt-6">
        <a
          href="#_"
          className="px-6 py-2 text-base font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto"
        >
          Upgrade Now
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
