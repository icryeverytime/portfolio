import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-600" >
       <p className="text-white">Link to all the icons used for the website:</p>
       <a
       className="text-blue-600 hover:underline"
        href="https://www.flaticon.com/free-icons/twitter"
        title="twitter icons"
        target="_blank" rel="noreferrer"
      >
        Twitter icons created by Pixel perfect - Flaticon
      </a>
      <a href="https://www.flaticon.com/free-icons/github" title="github icons" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
        Github icons created by riajulislam - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/linkedin"
        title="linkedin icons"
        className="text-blue-600 hover:underline"
      >
        Linkedin icons created by riajulislam - Flaticon
      </a>
      <a href="https://www.flaticon.com/free-icons/instagram" className="text-blue-600 hover:underline" title="instagram icons" target="_blank" rel="noreferrer">Instagram icons created by Freepik - Flaticon</a>
      <footer>&copy; Copyright 2022 Christian Viramontes</footer>
    </div>
  );
}
export default Footer;