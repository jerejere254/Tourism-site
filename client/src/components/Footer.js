import React from "react";
import {
  
  FiInstagram,
  FiTwitter,
   FiYoutube,
} from "react-icons/fi";

function Footer() {
  return (
    <div className="flex justify-center bg-black p-6 text-white text-2xl gap-x-6">
      <p className=" text-lg">Follow Us</p>

        <a href="https://twitter.com/jerryjerre254" target="_blank" rel="noreferrer">
        <FiTwitter />
      </a>
      
      <a
        href="https://www.instagram.com/moje99810/"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
      <a
        href="https://www.youtube.com/watch?v=OUNCrtxLMLM"
        target="_blank"
        rel="noreferrer"
      >
        <FiYoutube />
      </a>
    </div>
  );
}

export default Footer;