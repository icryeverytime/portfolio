import React, { useState, useEffect } from "react";
import portfolio1 from "../portfolioGD.png";
import thesis from "../thesis.png";
import twitter from "../twitterbot.png";
import shoe from "../mobileshoe.png";
import cplusimage from "../c++.png";
import guesswho from "../guesswho.png";
import articles from "../articles.png";
import simulator from "../simulator.png";
import job from "../job.png";
import compiler1 from "../compiler1.PNG";
import internetcompany1 from "../internetcompany1.PNG";
import calculator1 from "../calculator1.PNG";
import store1 from "../store1.PNG";
import webscrap from "../webscraping.png"
import apigoogle from '../googleapi.png'
import articleapi from '../articleapi.png'
import db from '../ddbsmanage.png'
import internet2 from '../internetcompany2.png'
function arrow(num){
  console.log(num)

  var title=document.getElementById('title')
  var page=document.getElementById('page')
  var react=document.getElementById('react1')
    var javascript=document.getElementById('js1')
    var html=document.getElementById('html1')
    var css=document.getElementById('css1')
    var pap=document.getElementById('api1')
    var node=document.getElementById('node1')
    var mongo=document.getElementById('mongo1')
    var image=document.getElementById('image')
    var para=document.getElementById('para')
    var sql=document.getElementById('sql1')
    var ang=document.getElementById('angular1')
    var type=document.getElementById('type1')
    var php=document.getElementById('php1')
    if(title.innerHTML==="Internet Company Website")
    {
      if(page.innerHTML==="1/2")
      {
        php.className="hidden"
        html.className="hidden"
        css.className="hidden"
        sql.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:from-fuchsia-500 hover:to-pink-500"
        image.src=internet2
        page.innerText="2/2"
        para.innerText="We use a MySql database to allow all the operations necessary for the website to work. The operations necessary are the folowing: register, login, update data, buy pacakges and print data of client. "
      }
      else{
        image.src=internetcompany1
        page.innerText="1/2"
        sql.className="hidden"
        para.innerText="This is a website built primarily with PHP, HTML and CSS where we try to make a Internet Company website trying to simulate how an administration part looks like."
        php.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-400 via-orange-400 to-lime-300 rounded-lg px-1 py-1 mx-1 hover:from-lime-300 hover:to-red-400"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
      }
    }
    if(title.innerHTML==="Music Article Site")
    {
      if(page.innerHTML==="1/3")
      {
        ang.className="hidden"
        type.className="hidden"
        html.className="hidden"
        css.className="hidden"
        
        if(num===1)
        {
          node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
          javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
          image.src=db
          para.innerHTML="The database follows this relational design where using PhpmyAdmin we replicate the database across two servers. Depedning on what letter the username starts with we make a request to one or another server allowing us to have server and databse overhead be shared among computers."
          page.innerText="2/3"
          sql.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:from-fuchsia-500 hover:to-pink-500"
        }
        else{
          image.src=articleapi
          page.innerHTML="3/3"
          pap.className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-1 py-1 mx-1 hover:from-lime-400 hover:to-yellow-400"
          para.innerHTML="We allow users to connect their Last.Fm to their account permitting us to use that data to show articles related to artists they listen too and show list of their listened to music on the user secion."
        }
      }
      else if(page.innerHTML==="2/3")
      {
        node.className="hidden"
        javascript.className="hidden"
        sql.className="hidden"
        if(num===-1)
        {
          page.innerHTML="1/3"
          para.innerText="This proyect's main focus is to simulate different forms of methods of database management and distributed servers. Angular is a great framework and let's us use typescript as our default language which is an improvement of Javascript."
          ang.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-1 py-1 mx-1 hover:from-red-400 hover:to-rose-600"
          html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
          css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
          type.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-1 py-1 mx-1 hover:from-emerald-600 hover:to-cyan-600"
          image.src=articles
        }
        else{
          image.src=articleapi
          page.innerHTML="3/3"
          pap.className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-1 py-1 mx-1 hover:from-lime-400 hover:to-yellow-400"
          para.innerHTML="We allow users to connect their Last.Fm to their account permitting us to use that data to show articles related to artists they listen too and show list of their listened to music on the user secion."
        }
      }
      else if(page.innerHTML==="3/3")
      {
        pap.className="hidden"
        if(num===1)
        {
          page.innerHTML="1/3"
          para.innerText="This proyect's main focus is to simulate different forms of methods of database management and distributed servers. Angular is a great framework and let's us use typescript as our default language which is an improvement of Javascript."
          ang.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-1 py-1 mx-1 hover:from-red-400 hover:to-rose-600"
          html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
          css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
          type.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-1 py-1 mx-1 hover:from-emerald-600 hover:to-cyan-600"
          image.src=articles
        }else{
          node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
          javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
          image.src=db
          para.innerHTML="The database follows this relational design where using PhpmyAdmin we replicate the database across two servers. Depedning on what letter the username starts with we make a request to one or another server allowing us to have server and databse overhead be shared among computers."
          page.innerText="2/3"
          sql.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:from-fuchsia-500 hover:to-pink-500"
        }
      }
    }
  if(title.innerHTML==="Thesis")
  {
    if(page.innerHTML==="1/3")
    {
      if(num===1)
      {
        mongo.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-500 hover:to-pink-500"
      node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
      image.src=webscrap
      para.innerHTML="We combined NodeJS and webscraping to make a script that gets all the data from the Billboard 100 chart and Billboard 200 chart once we get all the data we insert it into a MongoDB database. We used MongoDB due to it's flexible document scheme and high performance. Since our project deals with a massive ammount of data both are very important."
      page.innerHTML="2/3"
      }
      else{
        page.innerHTML="3/3"
        javascript.className="hidden"
        para.innerHTML="We use the Google api to send emails in Gmail with the code needed to be inserted to verify your email. We plan on implemented the use of the Last.fm api to allow users to connect their accounts permiting us access to even more music data."
        image.src=apigoogle
        pap.className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-1 py-1 mx-1 hover:from-lime-400 hover:to-yellow-400"
      }
      react.className="hidden"
      html.className="hidden"
      css.className="hidden"
    }else if(page.innerHTML==="2/3"){
      if(num===-1)
      {
        page.innerHTML="1/3"
        image.src=thesis
        react.className="text-white px-1 py-1 mx-1  text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-violet-500 to-indigo-700 rounded-lg hover:from-indigo-700 hover:to-violet-500"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        para.innerText="We decided to build our website using ReactJs due to its speed and performance primarily with it's Virtual DOM. Since we are going to handle large quantity of data it is important to get performance from anywhere we can. It also allows us to update elements like form inputs to validate data."
      }
      else{
        javascript.className="hidden"
        page.innerHTML="3/3"
        image.src=apigoogle
        para.innerHTML="We use the Google api to send emails in Gmail with the code needed to be inserted to verify your email. We plan on implemented the use of the Last.fm api to allow users to connect their accounts permiting us access to even more music data."
        pap.className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-1 py-1 mx-1 hover:from-lime-400 hover:to-yellow-400"

      }
      node.className="hidden"
      mongo.className="hidden"
    }
    else if(page.innerHTML==="3/3")
    {
      pap.className="hidden"
      if(num===1)
      {
        page.innerHTML="1/3"
        image.src=thesis
        react.className="text-white px-1 py-1 mx-1  text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-violet-500 to-indigo-700 rounded-lg hover:from-indigo-700 hover:to-violet-500"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        para.innerText="We decided to build our website using ReactJs due to its speed and performance primarily with it's Virtual DOM. Since we are going to handle large quantity of data it is important to get performance from anywhere we can. It also allows us to update elements like form inputs to validate data."
      }else{
        mongo.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-500 hover:to-pink-500"
      node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
      image.src=webscrap
      javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
      para.innerHTML="We combined NodeJS and webscraping to make a script that gets all the data from the Billboard 100 chart and Billboard 200 chart once we get all the data we insert it into a MongoDB database. We used MongoDB due to it's flexible document scheme and high performance. Since our project deals with a massive ammount of data both are very important."
      page.innerHTML="2/3"
       }
    }
    console.log(num)
  }
}
function tres(event, number) {
  if (event.target.nodeName === "BUTTON" || event.target.nodeName === "A") {
    console.log("Dont' do anything");
  } else {
    var modal = document.getElementById("exampleModal");
    var navbar=document.getElementById('nav')
    var title=document.getElementById('title')
    var html=document.getElementById('html1')
    var css=document.getElementById('css1')
    var image=document.getElementById('image')
    var api=document.getElementById('api1')
    var node=document.getElementById('node1')
    var para=document.getElementById('para')
    var page=document.getElementById('page')
    var cup=document.getElementById('cup1')
    var flex=document.getElementById('flex1')
    var sql=document.getElementById('sql1')
    var react=document.getElementById('react1')
    var java=document.getElementById('java1')
    var mongo=document.getElementById('mongo1')
    var javascript=document.getElementById('js1')
    var ang=document.getElementById('angular1')
    var cplus=document.getElementById('cplus1')
    var type=document.getElementById('type1')
    var php=document.getElementById('php1')
    var kot=document.getElementById('kotlin1')
    var reactnative=document.getElementById('reactnative1')
    navbar.className="hidden"
    modal.className =
      "mx-auto my-auto w-3/4 h-3/4 sm:w-3/4 overflow-scroll fixed inset-0 flex items-center bg-gray-600 rounded shadow-[0_35px_1000px_1000px_rgba(0,0,0,0.75)] sbadow-white";
    switch(number)
    {
      case 1:
        title.innerHTML="Thesis"
        image.src=thesis
        image.className="w-3/4 sm:w-2/4 h-auto items-center mx-auto"
        react.className="text-white px-1 py-1 mx-1  text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-violet-500 to-indigo-700 rounded-lg hover:from-indigo-700 hover:to-violet-500"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        para.innerText="We decided to build our website using ReactJs due to its speed and performance primarily with it's Virtual DOM. Since we are going to handle large quantity of data it is important to get performance from anywhere we can. It also allows us to update elements like form inputs to validate data."
        page.innerText="1/3"
        break;
      case 2:
        page.innerText="1/3"
        para.innerText="This proyect's main focus is to simulate different forms of methods of database management and distributed servers. Angular is a great framework and let's us use typescript as our default language which is an improvement of Javascript."
        ang.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-1 py-1 mx-1 hover:from-red-400 hover:to-rose-600"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        title.innerHTML="Music Article Site"
        type.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-1 py-1 mx-1 hover:from-emerald-600 hover:to-cyan-600"
        image.className="w-3/4 sm:w-2/4 h-auto items-center mx-auto"
        image.src=articles
        break;
      case 3:
        title.innerHTML="Compiler"
        image.className="w-3/4 sm:w-2/4 h-auto items-center mx-auto"
        image.src=compiler1
        page.innerHTML="1/1"
        flex.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-900 to-red-600 rounded-lg px-1 py-1 mx-1 hover:from-red-600 hover:to-rose-900"
        cup.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-blue-500"
        java.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-orange-300 to-fuchsia-400 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-400 hover:to-orange-300"
        para.innerHTML="This compiler is built with Java, Flex and Cup. Flex permits us to get the tokens of the words and Cup permits us to check if the combination of tokens is a valid. We have to make sure the rules we give them resemble a program."
        break;
      case 4:
        title.innerHTML="Portfolio site for Graphic Designer"
        image.className="w-3/4 sm:w-2/4 h-auto items-center mx-auto"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        image.src=portfolio1
        para.innerText="I made a simple portfolio site for my cousin for his portfolio. I used plain HTML, CSS and Javascript so hosting this website wouldn't be more difficult than needed. It is a completely responsive website that has great features considering it doesn't use any frameworks."
        page.innerText="1/1"
        break;
      case 5:
        title.innerHTML="Twitter bot"
        page.innerHTML="1/1"
        para.innerText="I wrote a script in Nodejs that combines both the Twitter api and the Last.fm api tweeting out the top albums, artists and tracks of the week. I save the Twitter username and Lastfm usernames in a simple SQL database."
        image.className="w-40 sm:w-64 lg:w-64 xl:w-64 2xl:w-72 h-auto items-center mx-auto"
        sql.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-500 hover:to-pink-500"
        api.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-1 py-1 mx-1 hover:from-lime-400 hover:to-yellow-400"
        node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        image.src=twitter
        break;
      case 6:
        title.innerHTML="Operating system memory allocation simulator"
        para.innerHTML="This is a C++ program that lets you pick the memory size, maximum memory of process, maximum amount of process executions and total time of simulation. Finally you have to choose one of the three following methods of memory allocation: worst adjustment, best adjustment and first adjustment."
        cplus.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-fuchsia-700 to-cyan-600 rounded-lg px-1 py-1 mx-1 hover:from-cyan-600 hover:to-fuchsia-700"
        image.className="w-40 sm:w-72 md:w-80 lg:w-96 xl:w-96 h-auto items-center mx-auto"
        image.src=simulator
        page.innerText="1/1"
        break;
      case 7:
        page.innerText="1/1"
        para.innerText="This is a simple reactnative app that connects to a mongodb database with over 1000 entries and shows them on screen. You can then click and edit each entry or delete it from the registry. Finally you can also insert into the database. All this is made possible with nodejs."
        title.innerHTML="Mobile shoe app"
        reactnative.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-lime-300 to-cyan-900 rounded-lg px-1 py-1 mx-1 hover:from-cyan-900 hover:to-lime-300"
        mongo.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-500 hover:to-pink-500"
        node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        image.className="w-40 sm:w-72 md:w-72 lg:w-72 xl:w-72 h-auto items-center mx-auto"
        image.src=shoe
        break;
      case 8:
        page.innerText="1/1"
        para.innerHTML="This C++ exercise manual that covers the following topics: operators new and delete, dynamic arrangements, dynamic structures, pointers to functions, handling arguments in the main function, fstream, binary files, class, attribute, method and object."
        title.innerHTML="C++ exercise manual"
        cplus.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-fuchsia-700 to-cyan-600 rounded-lg px-1 py-1 mx-1 hover:from-cyan-600 hover:to-fuchsia-700"
        image.className="w-40 sm:w-72 md:w-72 lg:w-72 xl:w-72 h-auto items-center mx-auto"
        image.src=cplusimage
        break;
      case 9:
        page.innerText="1/1"
        para.innerText="An Android app that let's you create an account and login. Once you login you can play two different modes of Guess Who one offline and one online. Online permits a connection through sockets for the chat,"
        title.innerHTML="Guess Who Android app"
        kot.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-1 py-1 mx-1 hover:from-pink-500 hover:to-indigo-500"
        node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        image.className="w-36 sm:w-48 md:w-48 lg:w-48 xl:w-52 h-auto items-center mx-auto"
        sql.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-500 hover:to-pink-500"
        image.src=guesswho
        break;
      case 10:
        page.innerText="1/1"
        title.innerHTML="Calculator"
        image.className="w-40 sm:w-64 md:w-64 lg:w-64 xl:w-64  h-auto items-center mx-auto"
        image.src=calculator1
        para.innerHTML="A simple Java calculator where you are allowed to put as many operations as you want this is done by using string split where you can split the string by the operators giving you the numbers separated with the operators."
        java.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-orange-300 to-fuchsia-400 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-400 hover:to-orange-300"
        break;
      case 11:
        page.innerText="1/2"
        para.innerText="This is a website built primarily with PHP, HTML and CSS where we try to make a Internet Company website trying to simulate how an administration part looks like."
        title.innerHTML="Internet Company Website"
        image.className="w-3/4 sm:w-2/4 h-auto items-center mx-auto"
        image.src=internetcompany1
        php.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-400 via-orange-400 to-lime-300 rounded-lg px-1 py-1 mx-1 hover:from-lime-300 hover:to-red-400"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        break;
      case 12:
        page.innerText="1/1"
        ang.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-1 py-1 mx-1 hover:from-red-400 hover:to-rose-600"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        title.innerHTML="Job application website"
        javascript.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-1 py-1 mx-1 hover:from-orange-400 hover:to-yellow-400"
        image.className="w-3/4 sm:w-2/4 h-auto items-center mx-auto"
        node.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-1 py-1 mx-1 hover:from-teal-500 hover:to-emerald-500"
        image.src=job
        para.innerText="This is a website that connects users with companies that are looking for workers. It uses the Google api to send emails through gmail and has a video service that allows virtual chatting. We use Mysql for all the database needs of the application and we connect them using NodeJS."
        type.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-1 py-1 mx-1 hover:from-emerald-600 hover:to-cyan-600"
        sql.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-500 hover:to-pink-500"
        break;
      case 13:
        page.innerHTML="1/1"
        title.innerHTML="Store in php"
        image.className="w-3/4 sm:w-2/4 h-auto items-center mx-auto"
        image.src=store1
        para.innerText="This simulates a store that specializes in video games. We use PHP and MySql to allow all the transactions and we use plain HTML and CSS for the design of the website."
        sql.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-1 py-1 mx-1 hover:from-fuchsia-500 hover:to-pink-500"
        php.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-400 via-orange-400 to-lime-300 rounded-lg px-1 py-1 mx-1 hover:from-lime-300 hover:to-red-400"
        html.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-1 py-1 mx-1 hover:from-amber-500 hover:to-red-500"
        css.className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-1 py-1 mx-1 hover:from-blue-700 hover:to-sky-500"
        break;
      default:
        break;
    }
  }
}
function close()
{
  var modal=document.getElementById('exampleModal');
  modal.className="hidden"
  var navbar=document.getElementById('nav')
    navbar.className="sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-10 bg-stone-900 sm:bg-transparent"
    var react=document.getElementById('react1')
    var javascript=document.getElementById('js1')
    var html=document.getElementById('html1')
    var css=document.getElementById('css1')
    var node=document.getElementById('node1')
    var api=document.getElementById('api1')
    var mongo=document.getElementById('mongo1')
    var cplus=document.getElementById('cplus1')
    var sql=document.getElementById('sql1')
    var java=document.getElementById('java1')
    var ang=document.getElementById('angular1')
    var type=document.getElementById('type1')
    var flex=document.getElementById('flex1')
    var cup=document.getElementById('cup1')
    var reactnative=document.getElementById('reactnative1')
    var kot=document.getElementById('kotlin1')
    var php=document.getElementById('php1')
    php.className="hidden"
    reactnative.className="hidden"
    flex.className="hidden"
    cup.className="hidden"
    sql.className="hidden"
    react.className="hidden"
    javascript.className="hidden"
    html.className="hidden"
    ang.className="hidden"
    type.className="hidden"
    css.className="hidden"
    mongo.className="hidden"
    api.className="hidden"
    cplus.className="hidden"
    java.className="hidden"
    node.className="hidden"
    kot.className="hidden"
}
function Portfolio() {
  const [angular, setAngular] = useState("false");
  const [react, setReact] = useState("false");
  const [reactnative, setReactnative] = useState("false");
  const [cplusplus, setCplus] = useState("false");
  const [java, setJava] = useState("false");
  const [kotlin, setKotlin] = useState("false");
  const [php, setPhp] = useState("false");
  const [node, setNode] = useState("false");
  const [mongo, setMongo] = useState("false");
  const [sql, setSql] = useState("false");
  const [js, setJs] = useState("false");
  const [type, setType] = useState("false");
  const [api, setApi] = useState("false");
  const [html, setHtml] = useState("false");
  const [css, setCss] = useState("false");
  const [flex, setFlex] = useState("false");
  const [cup, setCup] = useState("false");
  useEffect(() => {
    const filter = document.getElementById("filters");
    const job = document.getElementById("job");
    const store = document.getElementById("store");
    const inter = document.getElementById("internet");
    const cal = document.getElementById("calc");
    const guesswho = document.getElementById("guesswho");
    const mem = document.getElementById("memory");
    const exer = document.getElementById("exercise");
    const comp = document.getElementById("compiler");
    const portfgd = document.getElementById("portfoliogd");
    const thesis = document.getElementById("thesis");
    const article = document.getElementById("article");
    const twitter = document.getElementById("twitter");
    const mobile = document.getElementById("mobileshoe");
    const reactdoc = document.getElementById("react");
    const angulardoc = document.getElementById("angular");
    const nativedoc = document.getElementById("native");
    const cplusdoc = document.getElementById("c+");
    const javadoc = document.getElementById("java");
    if (
      react === "true" ||
      angular === "true" ||
      reactnative === "true" ||
      cplusplus === "true" ||
      java === "true" ||
      kotlin === "true" ||
      php === "true" ||
      node === "true" ||
      mongo === "true" ||
      sql === "true" ||
      js === "true" ||
      type === "true" ||
      api === "true" ||
      html === "true" ||
      css === "true" ||
      flex === "true" ||
      cup === "true"
    ) {
      filter.className =
        "text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-1";
    } else {
      filter.className = "hidden";
      job.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      store.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      inter.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      cal.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      guesswho.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      mem.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      exer.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      comp.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      portfgd.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      thesis.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      article.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      twitter.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      mobile.className =
        "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
    }
    if (react === "true") {
      reactdoc.className =
        "text-white px-1 py-1 md:px-3 md:py-3 mx-0 lg:mx-5  text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-violet-500 to-indigo-700 rounded-lg hover:from-indigo-700 hover:to-violet-500";
    } else {
      reactdoc.className = "hidden";
    }
    if (angular === "true") {
      angulardoc.className =
        "text-white px-1 py-1 md:px-3 md:py-3 mx-0 lg:mx-5  text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-3 py-3 mx-5 hover:from-red-400 hover:to-rose-600";
    } else {
      angulardoc.className = "hidden";
    }
    if (reactnative === "true") {
      nativedoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-lime-300 to-cyan-900 rounded-lg px-3 py-3 mx-5 hover:from-cyan-900 hover:to-lime-300";
    } else {
      nativedoc.className = "hidden";
    }
    if (cplusplus === "true") {
      if (
        react === "true" ||
        angular === "true" ||
        reactnative === "true" ||
        java === "true" ||
        kotlin === "true" ||
        php === "true" ||
        node === "true" ||
        mongo === "true" ||
        sql === "true" ||
        js === "true" ||
        type === "true" ||
        api === "true" ||
        html === "true" ||
        css === "true" ||
        flex === "true" ||
        cup === "true"
      ) {
        mem.className = "hidden";
        exer.className = "hidden";
      } else {
        mem.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        exer.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      }
      mobile.className = "hidden";
      twitter.className = "hidden";
      portfgd.className = "hidden";
      thesis.className = "hidden";
      article.className = "hidden";
      comp.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      cplusdoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-fuchsia-700 to-cyan-600 rounded-lg px-3 py-3 mx-5 hover:from-cyan-600 hover:to-fuchsia-700";
    } else {
      cplusdoc.className = "hidden";
    }
    if (php === "true") {
      thesis.className = "hidden";
      article.className = "hidden";
      comp.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      job.className = "hidden";
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        node === "false" &&
        mongo === "false" &&
        js === "false" &&
        type === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        inter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        store.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        inter.className = "hidden";
        store.className = "hidden ";
      }
    }
    if (node === "true") {
      comp.className = "hidden";
      portfgd.className = "hidden";
      mem.className = "hidden";
      exer.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      store.className = "hidden";
      if (
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        thesis.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        thesis.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        twitter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        twitter.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        api === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        mobile.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        mobile.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        guesswho.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        guesswho.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false" &&
        api === "false"
      ) {
        job.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        job.className = "hidden";
      }
    }
    if (mongo === "true") {
      article.className = "hidden";
      comp.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      if (
        react === "false" &&
        angular === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        api === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        mobile.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        mobile.className = "hidden";
      }
      if (
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        thesis.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        thesis.className = "hidden";
      }
    }
    if (css === "true") {
      comp.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      if (
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        thesis.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        thesis.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        node === "false" &&
        mongo === "false" &&
        js === "false" &&
        type === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        inter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        store.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        inter.className = "hidden";
        store.className = "hidden ";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        node === "false" &&
        mongo === "false" &&
        sql === "false" &&
        type === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        portfgd.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        portfgd.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
      if (
        reactnative === "false" &&
        react === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        job.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        job.className = "hidden";
      }
    }
    if (html === "true") {
      comp.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        node === "false" &&
        mongo === "false" &&
        js === "false" &&
        type === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        inter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        store.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        inter.className = "hidden";
        store.className = "hidden ";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        node === "false" &&
        mongo === "false" &&
        sql === "false" &&
        type === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        portfgd.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        portfgd.className = "hidden";
      }
      if (
        reactnative === "false" &&
        react === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        job.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        job.className = "hidden";
      }
      if (
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        thesis.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        thesis.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
    }
    if (api === "true") {
      comp.className = "hidden";
      portfgd.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      if (
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        thesis.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        thesis.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        twitter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        twitter.className = "hidden";
      }
    }
    if (type === "true") {
      thesis.className = "hidden";
      comp.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      store.className = "hidden";
      if (
        reactnative === "false" &&
        react === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        job.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        job.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
    }
    if (js === "true") {
      comp.className = "hidden";
      mem.className = "hidden";
      exer.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      store.className = "hidden";
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        node === "false" &&
        mongo === "false" &&
        sql === "false" &&
        type === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        portfgd.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        portfgd.className = "hidden";
      }
      if (
        reactnative === "false" &&
        react === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        job.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        job.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        guesswho.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        guesswho.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        api === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        mobile.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        mobile.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        twitter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        twitter.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
      if (
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        thesis.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        thesis.className = "hidden";
      }
    }
    if (sql === "true") {
      thesis.className = "hidden";
      comp.className = "hidden";
      portfgd.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      cal.className = "hidden";
      if (
        reactnative === "false" &&
        react === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        job.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        job.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        node === "false" &&
        mongo === "false" &&
        js === "false" &&
        type === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        inter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        store.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        inter.className = "hidden";
        store.className = "hidden ";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        api === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        guesswho.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        guesswho.className = "hidden";
      }
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        twitter.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        twitter.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
    }
    if (flex === "true") {
      thesis.className = "hidden";
      article.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      if (
        react === "true" ||
        angular === "true" ||
        reactnative === "true" ||
        cplusplus === "true" ||
        java === "true" ||
        kotlin === "true" ||
        php === "true" ||
        node === "true" ||
        mongo === "true" ||
        sql === "true" ||
        js === "true" ||
        type === "true" ||
        api === "true" ||
        html === "true" ||
        css === "true" ||
        cup === "true"
      ) {
        if (
          cup === "true" &&
          react === "false" &&
          angular === "false" &&
          reactnative === "false" &&
          cplusplus === "false" &&
          kotlin === "false" &&
          php === "false" &&
          node === "false" &&
          mongo === "false" &&
          sql === "false" &&
          js === "false" &&
          type === "false" &&
          api === "false" &&
          html === "false" &&
          css === "false"
        ) {
          comp.className =
            "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        } else {
          comp.className = "hidden";
        }
      } else {
        comp.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      }
    }
    if (react === "true") {
      article.className = "hidden";
      comp.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      if (
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        thesis.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        thesis.className = "hidden";
      }
    }
    if (angular === "true") {
      thesis.className = "hidden";
      comp.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      store.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      if (
        reactnative === "false" &&
        react === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        api === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        job.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        job.className = "hidden";
      }
      if (
        react === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        mongo === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        article.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        article.className = "hidden";
      }
    }
    if (kotlin === "true") {
      thesis.className = "hidden";
      article.className = "hidden";
      comp.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      if (
        react === "false" &&
        angular === "false" &&
        reactnative === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        php === "false" &&
        mongo === "false" &&
        type === "false" &&
        api === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        guesswho.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        guesswho.className = "hidden";
      }
    }
    if (reactnative === "true") {
      thesis.className = "hidden";
      article.className = "hidden";
      comp.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      if (
        react === "false" &&
        angular === "false" &&
        cplusplus === "false" &&
        java === "false" &&
        kotlin === "false" &&
        php === "false" &&
        sql === "false" &&
        type === "false" &&
        api === "false" &&
        html === "false" &&
        css === "false" &&
        flex === "false" &&
        cup === "false"
      ) {
        mobile.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      } else {
        mobile.className = "hidden";
      }
    }
    if (cup === "true") {
      thesis.className = "hidden";
      article.className = "hidden";
      portfgd.className = "hidden";
      twitter.className = "hidden";
      mem.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      guesswho.className = "hidden";
      cal.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      if (
        react === "true" ||
        angular === "true" ||
        reactnative === "true" ||
        cplusplus === "true" ||
        kotlin === "true" ||
        php === "true" ||
        node === "true" ||
        mongo === "true" ||
        sql === "true" ||
        js === "true" ||
        type === "true" ||
        api === "true" ||
        html === "true" ||
        css === "true"
      ) {
        comp.className = "hidden";
      } else {
        comp.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      }
    }
    if (java === "true") {
      if (
        react === "true" ||
        angular === "true" ||
        reactnative === "true" ||
        cplusplus === "true" ||
        kotlin === "true" ||
        php === "true" ||
        node === "true" ||
        mongo === "true" ||
        sql === "true" ||
        js === "true" ||
        type === "true" ||
        api === "true" ||
        html === "true" ||
        css === "true" ||
        flex === "true" ||
        cup === "true"
      ) {
        if (
          (cup === "true" ||
            flex === "true" ||
            (cup === "true" && flex === "true")) &&
          react === "false" &&
          angular === "false" &&
          reactnative === "false" &&
          cplusplus === "false" &&
          kotlin === "false" &&
          php === "false" &&
          node === "false" &&
          mongo === "false" &&
          sql === "false" &&
          js === "false" &&
          type === "false" &&
          api === "false" &&
          html === "false" &&
          css === "false"
        ) {
          comp.className =
            "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        } else {
          comp.className = "hidden";
        }
        cal.className = "hidden";
      } else {
        comp.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
        cal.className =
          "bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer";
      }
      thesis.className = "hidden";
      mem.className = "hidden";
      guesswho.className = "hidden";
      inter.className = "hidden";
      job.className = "hidden";
      store.className = "hidden";
      mobile.className = "hidden";
      exer.className = "hidden";
      article.className = "hidden";
      twitter.className = "hidden";
      portfgd.className = "hidden";
      javadoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-orange-300 to-fuchsia-400 rounded-lg px-3 py-3 mx-5 hover:from-fuchsia-400 hover:to-orange-300";
    } else {
      javadoc.className = "hidden";
    }
    if (kotlin === "true") {
      const kotlindoc = document.getElementById("kotlin");
      kotlindoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-3 py-3 mx-5 hover:from-pink-500 hover:to-indigo-500";
    } else {
      const kotlindoc = document.getElementById("kotlin");
      kotlindoc.className = "hidden";
    }
    if (php === "true") {
      const phpdoc = document.getElementById("php");
      phpdoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-400 via-orange-400 to-lime-300 rounded-lg px-3 py-3 mx-5 hover:from-lime-300 hover:to-red-400";
    } else {
      const phpdoc = document.getElementById("php");
      phpdoc.className = "hidden";
    }
    if (node === "true") {
      const nodedoc = document.getElementById("node");
      nodedoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-5 hover:from-teal-500 hover:to-emerald-500";
    } else {
      const nodedoc = document.getElementById("node");
      nodedoc.className = "hidden";
    }
    if (mongo === "true") {
      const mongodoc = document.getElementById("mongo");
      mongodoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-lime-500 to-green-500 rounded-lg px-3 py-3 mx-5 hover:from-green-500 hover:to-lime-500";
    } else {
      const mongodoc = document.getElementById("mongo");
      mongodoc.className = "hidden";
    }
    if (sql === "true") {
      const sqldoc = document.getElementById("sql");
      sqldoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-5 hover:from-fuchsia-500 hover:to-pink-500";
    } else {
      const sqldoc = document.getElementById("sql");
      sqldoc.className = "hidden";
    }
    if (js === "true") {
      const jsdoc = document.getElementById("js");
      jsdoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-5 hover:from-orange-400 hover:to-yellow-400";
    } else {
      const jsdoc = document.getElementById("js");
      jsdoc.className = "hidden";
    }
    if (type === "true") {
      const typedoc = document.getElementById("type");
      typedoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-3 py-3 mx-5 hover:from-emerald-600 hover:to-cyan-600";
    } else {
      const typedoc = document.getElementById("type");
      typedoc.className = "hidden";
    }
    if (api === "true") {
      const apidoc = document.getElementById("api");
      apidoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl  bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-3 py-3 mx-5 hover:from-lime-400 hover:to-yellow-400";
    } else {
      const apidoc = document.getElementById("api");
      apidoc.className = "hidden";
    }
    if (html === "true") {
      const htmldoc = document.getElementById("html");
      htmldoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-5 hover:from-amber-500 hover:to-red-500";
    } else {
      const htmldoc = document.getElementById("html");
      htmldoc.className = "hidden";
    }
    if (css === "true") {
      const cssdoc = document.getElementById("css");
      cssdoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-5 hover:from-blue-700 hover:to-sky-500";
    } else {
      const cssdoc = document.getElementById("css");
      cssdoc.className = "hidden";
    }
    if (flex === "true") {
      const flexdoc = document.getElementById("flex");
      flexdoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-900 to-red-600 rounded-lg px-3 py-3 mx-5 hover:from-red-600 hover:to-rose-900";
    } else {
      const flexdoc = document.getElementById("flex");
      flexdoc.className = "hidden";
    }
    if (cup === "true") {
      const cupdoc = document.getElementById("cup");
      cupdoc.className =
        "text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg px-3 py-3 mx-5 hover:from-orange-400 hover:to-blue-500";
    } else {
      const cupdoc = document.getElementById("cup");
      cupdoc.className = "hidden";
    }
  });
  return (
    <div className="bg-stone-900 pb-5" id="Portfolio">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl pt-1">
        Portfolio
      </h1>
      <p className="text-white text-sm sm:text-md md:text-lg lg:text-2xl xl:text-3xl">
        Click on the box of any project to get more information of the specific
        project
      </p>
      <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-1">
        Filter by subjects:
      </h2>
      <div className="flex flex-wrap justify-center mt-3 lg:mt-5 space-y-1 md:space-y-2 lg:mx-5">
        <button
          onClick={() => setReact("true")}
          className="text-white px-1 py-1 md:px-3 md:py-3 mx-1 xl:mx-5  text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-violet-500 to-indigo-700 rounded-lg hover:underline hover:from-indigo-700 hover:to-violet-500"
        >
          ReactJS
        </button>
        <button
          onClick={() => setAngular("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-red-400 hover:to-rose-600"
        >
          Angular
        </button>
        <button
          onClick={() => setReactnative("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-lime-300 to-cyan-900 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-cyan-900 hover:to-lime-300"
        >
          React Native
        </button>
        <button
          onClick={() => setCplus("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-fuchsia-700 to-cyan-600 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-cyan-600 hover:to-fuchsia-700"
        >
          C++
        </button>
        <button
          onClick={() => setJava("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-orange-300 to-fuchsia-400 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-fuchsia-400 hover:to-orange-300"
        >
          Java
        </button>
        <button
          onClick={() => setKotlin("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-pink-500 hover:to-indigo-500"
        >
          Kotlin
        </button>
        <button
          onClick={() => setPhp("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-400 via-orange-400 to-lime-300 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-lime-300 hover:to-red-400"
        >
          PHP
        </button>
        <button
          onClick={() => setNode("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-teal-500 hover:to-emerald-500"
        >
          NodeJS
        </button>
        <button
          onClick={() => setMongo("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-lime-500 to-green-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-green-500 hover:to-lime-500"
        >
          MongoDB
        </button>
        <button
          onClick={() => setSql("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-fuchsia-500 hover:to-pink-500"
        >
          SQL
        </button>
        <button
          onClick={() => setJs("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-orange-400 hover:to-yellow-400"
        >
          JavaScript
        </button>
        <button
          onClick={() => setType("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-emerald-600 hover:to-cyan-600"
        >
          Typescript
        </button>
        <button
          onClick={() => setApi("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-lime-400 hover:to-yellow-400"
        >
          APIs
        </button>
        <button
          onClick={() => setHtml("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-amber-500 hover:to-red-500"
        >
          HTML
        </button>
        <button
          onClick={() => setCss("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-blue-700 hover:to-sky-500"
        >
          CSS
        </button>
        <button
          onClick={() => setFlex("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-rose-900 to-red-600 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-red-600 hover:to-rose-900"
        >
          Flex
        </button>
        <button
          onClick={() => setCup("true")}
          className="text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-orange-400 hover:to-blue-500"
        >
          CUP
        </button>
      </div>
      <h2
        id="filters"
        className="hidden text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-1"
      >
        Filters:
      </h2>
      <div
        id="filtered"
        className="flex flex-wrap justify-center mt-3 lg:mt-5 space-y-1 md:space-y-2 lg:mx-5"
      >
        <button id="react">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setReact("false")}
          >
            X
          </span>
          ReactJS
        </button>
        <button id="angular">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setAngular("false")}
          >
            X
          </span>
          Angular
        </button>
        <button id="native">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setReactnative("false")}
          >
            X
          </span>
          React Native
        </button>
        <button
          id="c+"
          className="hidden text-white text-sm md:text-md lg:text-xl xl:text-2xl "
        >
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setCplus("false")}
          >
            X
          </span>
          C++
        </button>
        <button
          id="java"
          className="hidden text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-orange-300 to-fuchsia-400 rounded-lg px-3 py-3 mx-5 hover:underline hover:from-fuchsia-400 hover:to-orange-300"
        >
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setJava("false")}
          >
            X
          </span>
          Java
        </button>
        <button id="kotlin">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top
          rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setKotlin("false")}
          >
            X
          </span>
          Kotlin
        </button>
        <button id="php">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setPhp("false")}
          >
            X
          </span>
          PHP
        </button>
        <button id="node">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top
            rounded-full px-1 text-slate-400 hover:text-white
            hover:border-white"
            onClick={() => setNode("false")}
          >
            X
          </span>
          NodeJS
        </button>
        <button id="mongo">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setMongo("false")}
          >
            X
          </span>
          MongoDB
        </button>
        <button id="sql">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setSql("false")}
          >
            X
          </span>
          SQL
        </button>
        <button id="js">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setJs("false")}
          >
            X
          </span>
          JavaScript
        </button>
        <button id="type">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setType("false")}
          >
            X
          </span>
          Typescript
        </button>
        <button id="api">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setApi("false")}
          >
            X
          </span>
          APIs
        </button>
        <button id="html">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setHtml("false")}
          >
            X
          </span>
          HTML
        </button>
        <button id="css">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setCss("false")}
          >
            X
          </span>
          CSS
        </button>
        <button
          id="flex"
          className="hidden text-white text-sm md:text-md lg:text-xl xl:text-2xl"
        >
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setFlex("false")}
          >
            X
          </span>
          Flex
        </button>
        <button id="cup">
          <span
            className="border border-2 border-slate-400 mb-5 text-sm align-top rounded-full px-1 text-slate-400 hover:text-white hover:border-white"
            onClick={() => setCup("false")}
          >
            X
          </span>
          CUP
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly content-start mt-10 gap-y-10">
        <div
          id="thesis"
          className="bg-gray-600 flex flex-col justify-center hover:border-white  rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
          onClick={(e) => tres(e, 1)}
        >
          <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Thesis
          </h1>
          <img className="my-5 w-max" src={thesis} alt="thesis website" />
          <div className="flex flex-wrap justify-center space-y-1">
            <button
              onClick={() => setReact("true")}
              className="text-white px-1 py-1 md:px-3 md:py-3 mx-1  text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-violet-500 to-indigo-700 rounded-lg hover:underline hover:from-indigo-700 hover:to-violet-500"
            >
              ReactJS
            </button>
            <button
              onClick={() => setNode("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-teal-500 hover:to-emerald-500"
            >
              NodeJS
            </button>
            <button
              onClick={() => setMongo("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-lime-500 to-green-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-green-500 hover:to-lime-500"
            >
              MongoDB
            </button>
            <button
              onClick={() => setApi("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-lime-400 hover:to-yellow-400"
            >
              APIs
            </button>
            <button
              onClick={() => setJs("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-yellow-400"
            >
              JavaScript
            </button>
            <button
              onClick={() => setHtml("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-amber-500 hover:to-red-500"
            >
              HTML
            </button>
            <button
              onClick={() => setCss("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-blue-700 hover:to-sky-500"
            >
              CSS
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            My thesis is a Big Data project based on data from the music
            industry. We are combining data from apis from LastFm with data
            scraping of data from the Billboard charts. This is still under development.
          </p>
          <a
            className="text-blue-700 hover:underline "
            href="https://icryeverytime.github.io/thesis/#/thesis/SignUp"
            target="_blank"
            rel="noreferrer"
          >
            Link to website
          </a>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/thesis"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>

        <div
          id="article"
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:bordxer-3 mx-2 hover:cursor-pointer"
          onClick={(e) => tres(e, 2)}
        >
          <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Music Article Site
          </h1>
          <img className="my-5" src={articles} alt="portfolio website" />
          <div className="flex flex-wrap justify-center space-y-1">
            <button
              onClick={() => setAngular("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-red-400 hover:to-rose-600"
            >
              Angular
            </button>
            <button
              onClick={() => setNode("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-teal-500 hover:to-emerald-500"
            >
              NodeJS
            </button>
            <button
              onClick={() => setSql("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-500 hover:to-pink-500"
            >
              SQL
            </button>
            <button
              onClick={() => setType("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-emerald-600 hover:to-cyan-600"
            >
              Typescript
            </button>
            <button
              onClick={() => setApi("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-lime-400 hover:to-yellow-400"
            >
              APIs
            </button>
            <button
              onClick={() => setJs("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-yellow-400"
            >
              JavaScript
            </button>
            <button
              onClick={() => setHtml("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-amber-500 hover:to-red-500"
            >
              HTML
            </button>
            <button
              onClick={() => setCss("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-blue-700 hover:to-sky-500"
            >
              CSS
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            This is a website that permits you to write articles based on Music
            and allows you to review and leave comments on other published
            articles. This project implements a distributed data design
            permiting multiple database servers to handle request.
          </p>
          <a
            className="text-blue-700"
            href="https://github.com/icryeverytime/Redes"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="compiler"
          onClick={(e) => tres(e, 3)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2  hover:cursor-pointer"
        >
          <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Compiler
          </h1>
          <img className="my-5 w-max" src={compiler1} alt="compiler program" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setJava("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-orange-300 to-fuchsia-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-400 hover:to-orange-300"
            >
              Java
            </button>
            <button
              onClick={() => setFlex("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-rose-900 to-red-600 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-red-600 hover:to-rose-900"
            >
              Flex
            </button>
            <button
              onClick={() => setCup("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-blue-500"
            >
              CUP
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl  text-justify text-white">
            This project is for my class of Compilers where we have to build a
            compiler from scratch. This compiler has 5 different requirements to
            complete. This is still under development.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/compiler"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="portfoliogd"
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
          onClick={(e) => tres(e, 4)}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Portfolio site for Graphic Designer
          </h1>
          <img className="my-5" src={portfolio1} alt="portfolio website" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setHtml("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-amber-500 hover:to-red-500"
            >
              HTML
            </button>
            <button
              onClick={() => setCss("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-blue-700 hover:to-sky-500"
            >
              CSS
            </button>
            <button
              onClick={() => setJs("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-yellow-400"
            >
              JavaScript
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            I made a portfolio site for my cousin that is a graphic designer
            utilizing pure HTML, CSS and JavaScript.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://icryeverytime.github.io/CesarViramontes/"
            target="_blank"
            rel="noreferrer"
          >
            Link to webiste
          </a>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/CesarViramontes"
            target="_blank"
            Code
            in
            Github
            rel="noreferrer"
          >
            Link to code in git
          </a>
        </div>
        <div
          id="twitter"
          onClick={(e) => tres(e, 5)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Twitter Bot
          </h1>
          <img className="my-5" src={twitter} alt="twitter bot result" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setApi("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-lime-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-lime-400 hover:to-yellow-400"
            >
              APIs
            </button>
            <button
              onClick={() => setNode("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-teal-500 hover:to-emerald-500"
            >
              NodeJS
            </button>
            <button
              onClick={() => setJs("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-yellow-400"
            >
              JavaScript
            </button>
            <button
              onClick={() => setSql("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-500 hover:to-pink-500"
            >
              SQL
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            Twitter bot that tweets out your most listened to music of the week
            combining the Twitter Api with the Last.fm api
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://twitter.com/ICRIEDEVERYTIME/status/1543059912795820032"
            target="_blank"
            rel="noreferrer"
          >
            Tweets examples
          </a>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/twittermusicbot"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="memory"
          onClick={(e) => tres(e, 6)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Operating system memory allocation simulator
          </h1>
          <img className="my-5" src={simulator} alt="c++ code" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setCplus("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-fuchsia-700 to-cyan-600 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-cyan-600 hover:to-fuchsia-700"
            >
              C++
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            This is a C++ program that simulates the different methods of memory
            allocation with process execution in operating systems.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/memoryallocation"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="mobileshoe"
          onClick={(e) => tres(e, 7)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Mobile shoe app
          </h1>
          <img className="my-5" src={shoe} alt="mobile shoe app" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setReactnative("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-lime-300 to-cyan-900 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-cyan-900 hover:to-lime-300"
            >
              React Native
            </button>
            <button
              onClick={() => setNode("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-teal-500 hover:to-emerald-500"
            >
              NodeJS
            </button>
            <button
              onClick={() => setJs("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-yellow-400"
            >
              JavaScript
            </button>
            <button
              onClick={() => setMongo("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-lime-500 to-green-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-green-500 hover:to-lime-500"
            >
              MongoDB
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            A mobile app written in React Native that allows you to do the 4
            basic CRUD operations using a MongoDB database.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/shoestore"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>

        <div
          id="exercise"
          onClick={(e) => tres(e, 8)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            C++ exercise manual
          </h1>
          <img className="my-5" src={cplusimage} alt="c++ code" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setCplus("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-fuchsia-700 to-cyan-600 rounded-lg px-3 py-3 mx-1 xl:mx-5 hover:underline hover:from-cyan-600 hover:to-fuchsia-700"
            >
              C++
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            As part of my requirements to graduate I took an internship at my
            university where I was tasked with making an excercise manual based
            on the class of Programming II.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/Programacion-II-Ejemplos"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>

        <div
          id="guesswho"
          onClick={(e) => tres(e, 9)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Guess Who Android app
          </h1>
          <img
            className="my-5 h-[640px] w-auto"
            src={guesswho}
            alt="guess who android app"
          />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setKotlin("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-pink-500 hover:to-indigo-500"
            >
              Kotlin
            </button>
            <button
              onClick={() => setNode("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-teal-500 hover:to-emerald-500"
            >
              NodeJS
            </button>
            <button
              onClick={() => setJs("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-yellow-400"
            >
              JavaScript
            </button>
            <button
              onClick={() => setSql("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-500 hover:to-pink-500"
            >
              SQL
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            This is a mobile game app based on the game we all know and love
            Guess Who. This counts with two different modes online and offline
            permiting chat connection inbetween devices.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/guesswho"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="calc"
          onClick={(e) => tres(e, 10)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Calculator
          </h1>
          <img className="my-5" src={calculator1} alt="calculator aplication" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setJava("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-orange-300 to-fuchsia-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-400 hover:to-orange-300"
            >
              Java
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            A calculator that does basic operations up to how many operations
            you want built entirely in Java.
          </p>
          <a
            className="text-blue-700"
            href="https://github.com/icryeverytime/thesis"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="internet"
          onClick={(e) => tres(e, 11)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Internet Company Website
          </h1>
          <img
            className="my-5"
            src={internetcompany1}
            alt="internet company website"
          />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setPhp("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-red-400 via-orange-400 to-lime-300 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-lime-300 hover:to-red-400"
            >
              PHP
            </button>
            <button
              onClick={() => setSql("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-500 hover:to-pink-500"
            >
              SQL
            </button>
            <button
              onClick={() => setHtml("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-amber-500 hover:to-red-500"
            >
              HTML
            </button>
            <button
              onClick={() => setCss("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-blue-700 hover:to-sky-500"
            >
              CSS
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            This is a website that simulates an internet company website
            allowing purchases using primarily PHP for the code.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/analisis"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="job"
          onClick={(e) => tres(e, 12)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Job application website
          </h1>
          <img className="my-5" src={job} alt="job website" />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setAngular("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-rose-600 to-red-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-red-400 hover:to-rose-600"
            >
              Angular
            </button>
            <button
              onClick={() => setType("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-emerald-600 hover:to-cyan-600"
            >
              Typescript
            </button>
            <button
              onClick={() => setNode("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-teal-500 hover:to-emerald-500"
            >
              NodeJS
            </button>
            <button
              onClick={() => setJs("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-orange-400 hover:to-yellow-400"
            >
              JavaScript
            </button>
            <button
              onClick={() => setSql("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-500 hover:to-pink-500"
            >
              SQL
            </button>
            <button
              onClick={() => setHtml("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-amber-500 hover:to-red-500"
            >
              HTML
            </button>
            <button
              onClick={() => setCss("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-blue-700 hover:to-sky-500"
            >
              CSS
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            This is a website that allows people looking for jobs connect with
            employers looking for canidates.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/tecnologias"
            target="_blank"
            rel="noreferrer"
          >
            Code in Github
          </a>
        </div>
        <div
          id="store"
          onClick={(e) => tres(e, 13)}
          className="bg-gray-600 flex flex-col justify-center hover:border-white rounded-md border-2 border-gray-700 px-5 py-5 w-full xl:w-1/3 hover:border-3 mx-2 hover:cursor-pointer"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Store in php
          </h1>
          <img className="my-5" src={store1} alt="store in php " />
          <div className="flex flex-wrap justify-center">
            <button
              onClick={() => setPhp("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-red-400 via-orange-400 to-lime-300 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-lime-300 hover:to-red-400"
            >
              PHP
            </button>
            <button
              onClick={() => setSql("true")}
              className="text-white text-sm md:text-md lg:text-xl xl:text-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-fuchsia-500 hover:to-pink-500"
            >
              SQL
            </button>
            <button
              onClick={() => setHtml("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-red-500 to-amber-500 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-amber-500 hover:to-red-500"
            >
              HTML
            </button>
            <button
              onClick={() => setCss("true")}
              className="text-white text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg px-3 py-3 mx-1 hover:underline hover:from-blue-700 hover:to-sky-500"
            >
              CSS
            </button>
          </div>
          <p className="text-sm sm:text-md lg:text-lg xl:text-xl text-justify text-white">
            This is a php store that sells consoles. It was one of my first fully fledged project that I made.
          </p>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/icryeverytime/proyecto.github.io"
            rel="noreferrer"
            target="_blank"
          >
            Code in Github
          </a>
        </div>
      </div>
      <div
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        className="hidden"
      >
      <div className="flex flex-wrap w-full h-full flex-col overflow-scroll">
      <div class="grid grid-cols-11 sm:grid-cols-12 gap-4 mt-2">
      <p className="text-white" id="page">1/1</p>
      <div class="col-span-8 sm:col-span-10"></div>
      <button id="close" className="text-stone-300 hover:text-white text-2xl" onClick={() => close()}>X</button>
      </div>
        <h1 id="title" className="text-white text-sm sm:text-2xl">a</h1>
        <div className="flex">
        <button id="close" className="mt-0 sm:mt-10 h-2 ml-2 text-stone-300 hover:text-white text-2xl" onClick={() => arrow(-1)}>&#60;</button>
        <img id="image" className="w-3/4 sm:w-2/4 h-auto items-center mx-auto" alt="subject"></img>
        <button id="close" className="mt-0 sm:mt-10 h-2 mr-2 text-stone-300 hover:text-white text-2xl" onClick={() => arrow(1)}>&#62;</button>
        </div>
        <div className="flex flex-wrap justify-center mt-3 space-y-1 md:space-y-2 lg:mx-5">
        <button
          id="react1"
          className="hidden"
        >
          ReactJS
        </button>
        <button
          id="angular1"
          className="hidden"
        >
          Angular
        </button>
        <button
          id="reactnative1"
          className="hidden"
        >
          React Native
        </button>
        <button
          id="cplus1"
          className="hidden"
        >
          C++
        </button>
        <button
          id="java1"
          className="hidden"
        >
          Java
        </button>
        <button
          id="kotlin1"
          className="hidden"
        >
          Kotlin
        </button>
        <button
          id="php1"
          className="hidden"
        >
          PHP
        </button>
        <button
          id="node1"
          className="hidden"
        >
          NodeJS
        </button>
        <button
          id="mongo1"
          className="hidden text-white text-sm md:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-lime-500 to-green-500 rounded-lg px-1 py-1 mx-1 hover:underline hover:from-green-500 hover:to-lime-500"
        >
          MongoDB
        </button>
        <button
          id="sql1"
          className="hidden"
        >
          SQL
        </button>
        <button
          id="js1"
          className="hidden"
        >
          JavaScript
        </button>
        <button
          id="type1"
          className="hidden"
        >
          Typescript
        </button>
        <button
          id="api1"
          className="hidden"
        >
          APIs
        </button>
        <button
          id="html1"
          className="hidden"
        >
          HTML
        </button>
        <button
          id="css1"
          className="hidden"
        >
          CSS
        </button>
        <button
          id="flex1"
          className="hidden"
        >
          Flex
        </button>
        <button
          id="cup1"
          className="hidden"
        >
          CUP
        </button>
      </div>
        <div className="flex">
        <p id="para" className="text-white text-justify mt-5  mx-1 sm:mx-5 text-sm sm:text-md xl:text-lg 2xl:text-lg"></p>
        </div>
        
      </div>
      </div>
      </div>
      
  );
}
export default Portfolio;
