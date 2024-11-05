import { React, useContext } from "react";
import { ImFacebook, ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
// cursor context
import { CursorContext } from "../context/CursorContext";


const Socials = () => {
  const { mouseEnterHandler, mousLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mousLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li className="transform transition-transform duration-300 hover:scale-125">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-125">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-125">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <ImLinkedin />
          </a>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-125">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
