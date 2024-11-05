import { React, useContext } from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
//motion
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
// cursor context
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="woman" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
              I am a <b>photographer</b> and <b>filmmaker</b> based in Nairobi,
              Kenya. I have been in the industry for over <b>10 years</b>. I
              have worked with numerous clients and have been featured in
              several magazines.
              <br />
              <br />
              My passion for photography and film making started at a young age.
              I have always loved capturing moments and telling stories through
              my lens. I believe that every photo and video should tell a story
              and evoke emotions.
            </p>

            <Link to={"/portfolio"} className="btn">
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
