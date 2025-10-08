import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
  rating: string;
};

const ClientReviewCard = ({ image, name, rating }: Props) => {
  return (
    <div className="bg-white shadow-md p-8 sm:flex items-center sm:space-y-0 space-y-4 sm:space-x-6 rounded-lg">
      <div>
        <Image
          src={image}
          alt={name}
          width={350}
          height={350}
          
        />
      </div>
      <div>
        <h1 className="text-lg font-bold text-blue-950">{name}</h1>
        <div className="flex items-center space-x-3">
          <p className="text-2xl font-bold text-orange-500">{rating}</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 w-4 h-4" />
            <FaStar className="text-yellow-500 w-4 h-4" />
            <FaStar className="text-yellow-500 w-4 h-4" />
            <FaStar className="text-yellow-500 w-4 h-4" />
            <FaStarHalf className="text-yellow-500 w-4 h-4" />
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe
          aperiam, facere mollitia nemo inventore!
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
