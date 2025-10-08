import React from "react";
import BoxText from "../../Helper/BoxText";
import { FaBriefcase, FaRocket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaChess } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="pb-16 pt-16">
      <div className="w-[80%] mx-auto ">
        <BoxText> Our Services </BoxText>
        <h1 className="mt-4 text-2xl md:text-3xl  font-bold text-gray-800">
          Our Services Made For You
        </h1>
        <p className="mt-4 text-xs w-full sm:w-[80%] md:[70%]  lg:[60%]  xl-[50%] text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          consectetur voluptatum cumque rerum, numquam possimus culpa totam nemo
          commodi minus, nihil provident ad natus fugit.
        </p>
        {/*grid section*/}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center gap-y-12 mt-16">
          {/*first service*/}
          <div className="flex  items-center  space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaRocket className="w-6 h-6 text-orange-400 " />
            </div>
            {/*text*/}
            <div className="">
              <p className="text-lg font-bold text-gray-700">Start Up</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                minima?{" "}
              </p>
            </div>
          </div>
          {/*second service*/}
          <div className="flex  items-center  space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaBriefcase className="w-6 h-6 text-orange-400 " />
            </div>
            {/*text*/}
            <div className="">
              <p className="text-lg font-bold text-gray-700">Bussiness</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                minima?{" "}
              </p>
            </div>
          </div>
            {/*third service*/}
            <div className="flex  items-center  space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaShoppingCart className="w-6 h-6 text-orange-400 " />
            </div>
            {/*text*/}
            <div className="">
              <p className="text-lg font-bold text-gray-700">E-commerce</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                minima?{" "}
              </p>
            </div>
          </div>
          {/*fourth service*/}
          <div className="flex  items-center  space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <MdOutlineDesignServices className="w-6 h-6 text-orange-400 " />
            </div>
            {/*text*/}
            <div className="">
              <p className="text-lg font-bold text-gray-700">Digital design</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                minima?{" "}
              </p>
            </div>
          </div>
          {/*fifth service*/}
          <div className="flex  items-center  space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <IoColorPaletteOutline className="w-6 h-6 text-orange-400 " />
            </div>
            {/*text*/}
            <div className="">
              <p className="text-lg font-bold text-gray-700">UnLimited colors</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                minima?{" "}
              </p>
            </div>
          </div>
          {/*sixth service*/}
          <div className="flex  items-center  space-x-5">
            <div className="w-20 h-20 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaChess className="w-6 h-6 text-orange-400 " />
            </div>
            {/*text*/}
            <div className="">
              <p className="text-lg font-bold text-gray-700">Strategy solution</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                minima?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
