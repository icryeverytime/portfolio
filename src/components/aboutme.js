import React from "react";

function Aboutme() {
  return (
    <div id="aboutme" className="flex items-center justify-center bg-stone-900" >
    
      <div className="px-0 py-10 ">
        <div className="items-start justify-center">
          <div className="relative group max-w-xs sm:max-w-sm md:max-w-md">
            <div className="absolute -inset-2 group-hover:-inset-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 animate-tilt"></div>
            <div className="relative px-0 py-8 bg-gradient-to-r from-stone-800 to-stone-900 rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <div className="text-gray-100 group-hover:text-gray-100 transition duration-100">
                <h1 className="text-sm  sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">About me</h1>
                <p className="text-xs sm:text-sm md:text-base mx-5 my-5 lg:text-lg xl:text-xl 2xl:text-2xl text-justify">I am a currently studying abroad in Mexico in my last semester of my career in Computer Science. I love programming and the process of creating projects from start to finish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Aboutme;
