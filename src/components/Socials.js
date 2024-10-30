import React from "react";
import { ImFacebook, ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <ImInstagram /> {/* change later to X */}
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
