import React from "react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My latest projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my web development portfolio! Explore a collection of my
        latest projects, showcasing my skills in web development and design. Click to view the project.
        {isDarkMode ? (
          <Image src={assets.clickDarkLogo} alt="handCursor" className="w-7 ml-2 inline-block" />
        ) : (
          <Image src={assets.clickLogo} alt="click" className="w-7 ml-2 inline-block" />
        )}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-light-gray rounded-lg h-full py-[5%] px-[5%] shadow-[3px_3px_0_#d2d2d2] dark:shadow-white/20 dark:bg-dark-hover/50 dark:text-white flex flex-col"
          >
            {/* project picture */}
            <a href={project.link} target="_blank">
              <motion.img
                src={project.bgImage}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </a>

            {/* word part */}
            <motion.div className="h-full flex flex-col">
              {/* left:title and description */}
              {/* <motion.div className="w-full justify-center"> */}
              <a href={project.link} target="_blank"><motion.h1 className="text-xl font-ovo my-5">
                  {project.title}
                </motion.h1></a>
                
                {/* description tag */}
                <motion.ul className="flex flex-wrap gap-2">
                  {project.description.map((item, index) => {
                    return (
                      <motion.li
                        key={index}
                        className="px-2 bg-light-purple rounded-md text-sm text-gray-500 dark:bg-white/10 dark:text-gray-300"
                      >
                        {item}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
              {/* right:button */}
              {/* <motion.div className="flex items-center">
                <a href={project.link} target="_blank">
                  <motion.button className="w-10 h-10 bg-light-purple shadow-[2px_2px_0_#d2d2d2] dark:bg-white/30 dark:shadow-dark-workBtn-shadow dark:hover:bg-white/20 border-gray-400 rounded-lg flex items-center justify-center  cursor-pointer hover:bg-white group">
                    {isDarkMode ? (
                      <Image
                        src={assets.arrow_icon_dark}
                        alt="arrow"
                        className="w-4 h-4 group-hover:rotate-45 duration-300"
                      ></Image>
                    ) : (
                      <Image
                        src={assets.arrow_icon}
                        alt="arrow"
                        className="w-4 h-4 group-hover:rotate-45 duration-500"
                      ></Image>
                    )}
                  </motion.button>
                </a>
              </motion.div> */}
            </motion.div>
          // </motion.div>
        ))}
      </motion.div>

      {/* show more button */}
      {/* <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover"
      >
        show more{" "}
        <Image
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />{" "}
      </motion.a> */}
    </motion.div>
  );
};

export default Work;
