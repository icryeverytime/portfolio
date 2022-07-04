import React from "react";
class Navbar extends React.Component{
    smallscreen()
    {
        const name=document.getElementById('name')
        const button=document.getElementById('button')
        const right=document.getElementById('right')
        const exit=document.getElementById('exit')
        name.className="block sm:block text-gray-400 hover:text-gray-50 mx-5 sm:my-3 my-0 hover:cursor-pointer"
        button.className="hidden"
        right.className="block sm:block py-0 sm:py-3 flex flex-col sm:flex-row"
        exit.className="block text-6xlg text-gray-50 mx-5 my-0 hover:cursor-pointer font-bold"
    }
    exit()
    {
        console.log("Pressed")
        const name=document.getElementById('name')
        const button=document.getElementById('button')
        const right=document.getElementById('right')
        const exit=document.getElementById('exit')
        name.className="hidden sm:block text-gray-400 hover:text-gray-50 mx-5 sm:my-3 my-0 hover:cursor-pointer"
        button.className="block sm:hidden navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        right.className="hidden sm:block py-0 sm:py-3 flex flex-col sm:flex-row"
        exit.className="hidden text-gray-400 hover:text-gray-50 mx-5 my-0 hover:cursor-pointer"
    }
    render() {
        return (
          <nav id="nav" className="sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-10 bg-stone-900 sm:bg-transparent">
            <div className="flex flex-col sm:flex-row justify-between">
            <a href="#" id="exit" className="hidden bg-stone-900" onClick={this.exit}>
                X
              </a>
              <a href="#ChristianViramontes" id="name" className="hidden sm:block text-gray-200 hover:text-gray-50 mx-5 sm:my-3 my-0 hover:cursor-pointer">
                Christian Viramontes
              </a>
              <div id="right" className="hidden sm:block py-3 flex flex-col sm:flex-row">
              <a
                  href="#aboutme"
                  className="text-gray-200 hover:text-gray-50 px-3 hover:cursor-pointer"
                >
                  About me
                </a>
                <a
                  href="#Portfolio"
                  className="text-gray-200 hover:text-gray-50 px-3 hover:cursor-pointer"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-50 px-3 hover:cursor-pointer"
                >
                  Contact me
                </a>
              </div>
      
              <button
                id="button"
                className="block sm:hidden navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                onClick={this.smallscreen}
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  className="w-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        );
      }
}


export default Navbar;
