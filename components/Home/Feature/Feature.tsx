import React from "react";
import Image from "next/image";
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { LuPen } from "react-icons/lu";

const Feature = () => {
  return (
    <div className="pt-16 pb-16 m-5 bg-gray-100">
      <div>
        <h1 className="text-center text-2xl ">Key Features of The Product</h1>
        <p className="text-center font-medium mt-6 text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
          {" "}
          Our products stands out with its high performance, delivering
          bleezing-fast speeds and seamless multitasking
        </p>
      </div>
      {/*Feature Grid Container*/}
      <div className=" w-[80%] mx-auto mt-16 grid grid-cols-1  lg:grid-cols-2 gap-10 items-center">
        {/*Feature Grid*/}
        <div className="grid grid-col-1 md:grid-cols-2 gap-10 item-center bg-gray-300  ml-16 mt-3 border-rounded-lg ">
          {/*feature item 1}*/}
          <div className="bg-white p-4 rounded-lg  ">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500">
                <MdOutlineTouchApp className="text-orange-400 w-6 h-6 " />
              </div>
              <h2 className="text-lg font-bold text-gray-700">
                App Integration
              </h2>
            </div>
            <p className="mt-3 mb-3 text-xs text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsa
              explicabo sint quisquam. Perspiciatis omnis molestias neque quia
              iusto eos consequuntur, modi maiores eius repudiandae!
            </p>
          </div>
          {/*2-nd item*/}

          <div className="bg-white p-4 rounded-lg  ">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500">
                <GoWorkflow className="text-orange-400 w-6 h-6 " />
              </div>
              <h2 className="text-lg font-bold text-gray-700">
                Workflow Builder
              </h2>
            </div>
            <p className="mt-3 mb-3 text-xs text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsa
              explicabo sint quisquam. Perspiciatis omnis molestias neque quia
              iusto eos consequuntur, modi maiores eius repudiandae!
            </p>
          </div>

          {/*3-rd item*/}

          <div className="bg-white p-4 rounded-lg  ">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500">
                <LuPen className="text-orange-400 w-6 h-6 " />
              </div>
              <h2 className="text-lg font-bold text-gray-700">
                Problem Solution
              </h2>
            </div>
            <p className="mt-3 mb-3 text-xs text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsa
              explicabo sint quisquam. Perspiciatis omnis molestias neque quia
              iusto eos consequuntur, modi maiores eius repudiandae!
            </p>
          </div>

          {/*4-th item*/}

          <div className="bg-white p-4 rounded-lg  ">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500">
                <MdAccessAlarm className="text-orange-400 w-6 h-6 " />
              </div>
              <h2 className="text-lg font-bold text-gray-700">
                LifeTime access
              </h2>
            </div>
            <p className="mt-3 mb-3 text-xs text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsa
              explicabo sint quisquam. Perspiciatis omnis molestias neque quia
              iusto eos consequuntur, modi maiores eius repudiandae!
            </p>
          </div>
        </div>

        {/*image*/}
        <div>
          <Image
            src="/images/f1.png"
            alt="feature image"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
