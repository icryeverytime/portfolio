import React from "react";
import portfolio from "../portfolioGD.png"
import thesis from "../thesis.png"
import twitter from '../twitterbot.png'
import shoe from '../mobileshoe.png'
import cplus from '../c++.png'
import guesswho from '../guesswho.png'
import articles from '../articles.png'
import simulator from '../simulator.png'
import job from '../job.png'
class Portfolio extends React.Component{
    click(event)
    {
        console.log(event)
    }
    render()
    {
        return(
            <div className="bg-stone-900" id="Portfolio">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl pt-1">Portfolio</h1>
            <p className="text-white text-sm sm:text-md md:text-lg lg:text-2xl xl:text-3xl">Click on the box of any project to get more information of the specific project </p>
            <div className="flex flex-wrap justify-evenly content-start mt-10 gap-y-10">
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Thesis</h1>
                    <img className="my-5 w-max" src={thesis} alt="thesis website"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">My thesis is a Big Data project based on data from the music industry. We are combining data from apis from LastFm with data scraping of data from the Billboard charts.</p>
                    <a className="text-blue-700 hover:underline " href="https://icryeverytime.github.io/thesis/#/thesis/SignUp" target="_blank" rel="noreferrer">Link to website</a>
                    <a className="text-blue-700 hover:underline" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2  hover:cursor-pointer">
                    <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Compiler</h1>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl  text-justify text-white">This project is for my class of Compilers where we have to build a compiler from scratch. This compiler has 5 different requirements to complete with which are</p>
                    
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:bordxer-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Music Article Site</h1>
                    <img className="my-5" src={articles} alt="portfolio website"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">This is a website that permits you to write articles based on Music and allows you to review and leave comments on other published articles. This project implements a distributed data design permiting multiple database servers to handle request.</p>
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div onClick={(event)=>this.click(event)} className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Portfolio site for Graphic Designer</h1>
                    <img className="my-5" src={portfolio} alt="portfolio website"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">I made a portfolio site for my cousin that is a graphic designer utilizing pure HTML, CSS and JavaScript.</p>
                    <a className="text-blue-700 hover:underline" href="https://icryeverytime.github.io/CesarViramontes/" target="_blank" rel="noreferrer">Link to webiste</a>
                    <a className="text-blue-700 hover:underline" href="https://github.com/icryeverytime/CesarViramontes" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Twitter Bot</h1>
                    <img className="my-5" src={twitter} alt="twitter bot result"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">Twitter bot that tweets out your most listened to music of the week combining the Twitter Api with the Last.fm api</p>
                    <a className="text-blue-700 hover:underline" href="https://twitter.com/ICRIEDEVERYTIME/status/1543059912795820032" target="_blank" rel="noreferrer">Tweets examples</a>
                    <a className="text-blue-700 hover:underline" href="https://github.com/icryeverytime/twittermusicbot" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Mobile shoe app</h1>
                    <img className="my-5" src={shoe} alt="mobile shoe app"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">A mobile app written in React Native that allows you to do the 4 basic CRUD operations using a MongoDB database.</p>
                    <a className="text-blue-700 hover:underline" href="https://github.com/icryeverytime/shoestore" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Guess Who Android app</h1>
                    <img className="my-5 h-96 w-auto" src={guesswho} alt="twitter bot result"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">This is a mobile game app based on the game we all know and love Guess Who. This counts with two different modes online and offline permiting chat connection inbetween devices.</p>
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">C++ exercise manual</h1>
                    <img className="my-5" src={cplus} alt="c++ code"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">As part of my requirements to graduate I took an internship at my university where I was tasked with making an excercise manual based on the class of Programming II.</p>
                    <a className="text-blue-700 hover:underline" href="https://github.com/icryeverytime/Programacion-II-Ejemplos" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Internet Company Website</h1>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">This is a website that simulates an internet company website allowing purchases using primarily PHP for the code.</p>
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Imaginary number calculator</h1>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">An irregular calculator that does basic operations between two expresions with irregular numbers built in Java.</p>
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Job application website</h1>
                    <img className="my-5" src={job} alt="job website"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">This is a website that allows people looking for jobs connect with employers looking for canidates.</p>
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Operating system memory allocation simulator</h1>
                    <img className="my-5" src={simulator} alt="c++ code"/>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">This is a C++ program that simulates the different methods of memory allocation in operating systems</p>
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                <div className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Store in php</h1>
                    <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">This is a php store</p>
                    <a className="text-blue-700" href="https://github.com/icryeverytime/thesis" target="_blank" rel="noreferrer">Code in Github</a>
                </div>
                
            </div>
        </div>
        );
    }
}
export default Portfolio;