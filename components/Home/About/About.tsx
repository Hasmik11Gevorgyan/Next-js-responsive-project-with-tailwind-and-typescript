import React from "react";
import Image from "next/image";
import BoxText from "../../Helper/BoxText";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className='"w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/*image content*/}
        <div className="flex justify-center">
          <Image src="/images/about.png" alt="about" width={600} height={600} />
        </div>
        {/*text content*/}
        <div>
          <BoxText>About Us</BoxText>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]"> Everything You Need To Grow Your Business</h1>
       <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-600"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laboriosam. Neque omnis doloremque aliquid quisquam autem molestias doloribus nostrum earum distinctio consequuntur aperiam ex culpa consectetur alias quaerat, iure tenetur?
       </p>
       <button className="mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967]"> Learn more &#8594 </button>
       
    <div className="mb-8 border-l-2 border-gray-200">  
 <div className="ml-6">  
  <p className="text-gray-700 font-medium mt-5"> This is the best tool i have ever used
    The many integrations that  can be linked really help me see data from other tools i also use
  </p>
  <div className="flex items-center space-x-6 mt-6">
<Image
 src="/images/u1.jpg" 
 alt="person" 
 width={40} 
 height={40} 
 className="rounded-full"/>
 <div> 
  <p className="font-medium">Jesicca Doe </p>
  <p className="text-gray-700 text-sm"> Web Developer</p>
 </div>
  </div>
   </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default About;
