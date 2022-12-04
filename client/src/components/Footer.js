import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

function Footer() {
  return (
    <div className="flex justify-center bg-black p-6 text-white text-2xl gap-x-6">
      <p className=" text-lg">Follow Us</p>

      <a
        href="https://www.facebook.com/dennis.mburu.7/"
        target="_blank"
        rel="noreferrer"
      >
        <FiFacebook />
      </a>
      <a href="https://twitter.com/mburu_deh" target="_blank" rel="noreferrer">
        <FiTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/dennis-mburu-8a1407193"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://www.instagram.com/dennis_mburu/"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCfvdojsFad9daOxZyoDmbhQ"
        target="_blank"
        rel="noreferrer"
      >
        <FiYoutube />
      </a>
    </div>
  );
}

export default Footer;