import React from "react";
import image1 from "../github.png"
import image2 from "../twitter.png"
import image3 from "../linkedin.png"
import image4 from '../instagram.png'
import "./gradientanimation.css"
function Content() {
    return(
        <div className="flex flex-col py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48" id="ChristianViramontes">
        <h1 className=" text-white mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Christian Viramontes</h1>
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Social Media links:</h1>
        <div className="flex mb-10 justify-center mt-5 hover:cursor-pointer">
        <a href="https://github.com/icryeverytime" target="_blank" rel="noreferrer">
        <img className="mx-3 hover:cursor-pointer w-12 h-12 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:mx-4 xl:w-52 xl:h-52 xl:mx-5" src={image1} />
        </a>
        <a  href="https://twitter.com/ICRIEDEVERYTIME" target="_blank" rel="noreferrer">
        <img className="mx-3 hover:cursor-pointer w-12 h-12 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:mx-4 xl:w-52 xl:h-52 xl:mx-5" src={image2} />
        </a>
        <a href="https://www.linkedin.com/in/christian-viramontes-8558921b8/" target="_blank" rel="noreferrer">
        <img className="mx-3 hover:cursor-pointer w-12 h-12 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:mx-4 xl:w-52 xl:h-52  xl:mx-5" src={image3}  />
        </a>
        <a href="https://www.instagram.com/icriedeverytime/" target="_blank" rel="noreferrer">
        <img className="mx-3 hover:cursor-pointer w-12 h-12 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 lg:mx-4 xl:w-52 xl:h-52  xl:mx-5" src={image4}  />
        </a>
        </div>

        </div>
    );
}
export default Content;