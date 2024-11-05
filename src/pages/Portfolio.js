import { React, useContext } from "react";
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import { Link } from "react-router-dom";
// motion and transition
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
// cursor context
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              I have worked on a variety of photography projects, from weddings
              to corporate events. I am confident in my ability to deliver the
              best results for you. <br /> <br />I also specialize in
              portraiture, focusing on capturing individuality and emotion.
              Whether it’s a formal event or an impromptu shoot, I aim to create
              timeless images that tell stories and exceed expectations.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* grid image */}
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image1}
                alt="image1"
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image2}
                alt="image2"
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image3}
                alt="image3"
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                src={Image4}
                alt="image4"
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
