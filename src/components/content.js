import React from "react";
import image1 from "../github.png"
import image2 from "../twitter.png"
import image3 from "../linkedin.png"
import "./gradientanimation.css"
function Content() {
    return(
        <div className="flex flex-col py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48" id="ChristianViramontes">
        <h1 className=" text-white mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Christian Viramontes</h1>
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Social Media links:</h1>
        <div className="flex mb-10 justify-center mt-5 hover:cursor-pointer">
          <img className="mx-3 hover:cursor-pointer w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:mx-4 xl:w-52 xl:h-52 xl:mx-5" src={image1} />
          <img className="mx-3 hover:cursor-pointer w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:mx-4 xl:w-52 xl:h-52 xl:mx-5" src={image2} />
          <img className="mx-3 hover:cursor-pointer w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:mx-4 xl:w-52 xl:h-52  xl:mx-5" src={image3}  />
        </div>

        </div>
    );
}
export default Content;