import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4">
        {/*first part*/}
        <div className="space-y-5">
          <h1 className="text-lg font-bold"> Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            About us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            News and Press
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Our Customers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Leadership
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Careers
          </p>
        </div>
        {/*second part*/}
        <div className="space-y-5">
          <h1 className="text-lg font-bold"> Solution</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Enterprice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            By work flow
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            By team
          </p>
        </div>
        {/*third part*/}
        <div className="space-y-5">
          <h1 className="text-lg font-bold"> Resources</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Blog
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Webinar and events
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Podcast
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            E-book & guides
          </p>
        </div>
        {/*fourth part*/}
        <div className="space-y-5">
          <h1 className="text-lg font-bold"> Contact us</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Our Mobile number
          </p>
          <p className="text-bold text-base text-gray-950">+37493606532</p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-800">
            Our email
          </p>
          <p className="text-bold text-base text-gray-950">example@gmail.com</p>
        </div>
      </div>
      {/*bottom part*/}
      <div className="mt-8 w-[80%] border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm mx-auto">
        <p className="text-center md:text-left ">
          {" "}
          copyright @2025WebDev . All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span> Social:</span>
          <span className="text-blue-800 hover:text-gray-800">
            {" "}
            <FaFacebook />
          </span>
          <span className="text-blue-800">
            {" "}
            <FaTwitter />
          </span>
          <span className="text-blue-800">
            {" "}
            <FaWhatsapp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
