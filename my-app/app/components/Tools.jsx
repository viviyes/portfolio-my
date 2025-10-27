import React, { useState } from "react";
import { motion } from "motion/react";
import {
  toolsTabs,
  frontendStack,
  backendStack,
  databaseStack,
  cloudStack,
  toolsStack,
} from "@/assets/assets";
import Image from "next/image";

const Tools = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const getCurrentStack = () => {
    switch (activeTab) {
      case "Frontend":
        return frontendStack;
      case "Backend":
        return backendStack;
      case "Database":
        return databaseStack;
      case "Cloud":
        return cloudStack;
      case "Tools":
        return toolsStack;
      default:
        return frontendStack;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I use
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Skills and Tools
      </motion.h2>

      {/* buttons */}
      <div className="max-w-2xl mx-auto">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 grid grid-tools-btn-auto justify-items-center gap-3 "
        >
          {toolsTabs.map((tab) => (
            <motion.li key={tab.id}>
              <button
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "w-24 h-10 sm:w-28 sm:h-12 text-sm sm:text-base text-center cursor-pointer border-[0.5px] border-transparent rounded-xl transition-transform transition-colors duration-150 hover:bg-light-hover hover:-translate-y-1 hover:shadow-gray hover:border-gray-400",
                  "dark:hover:shadow-white/30 dark:hover:bg-dark-hover/50",
                  activeTab === tab.id
                    ? "bg-light-hover -translate-y-1 shadow-gray border-gray-400 dark:bg-dark-hover/50 dark:shadow-white/30"
                    : "",
                ].join(" ")}
              >
                {tab.label}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* icons */}
      
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="grid grid-tools-bar-auto my-10 gap-6 justify-items-center"
        >
          {getCurrentStack().map(({ icon, name, des }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex items-center gap-3 w-60 h-20 border-[0.5px] border-gray-400 rounded-xl  cursor-pointer dark:bg-white/5"
              title={name}
              key={index}
              viewport={{ once: true }}
            >
              <div className="ml-5 w-10 h-10 sm:w-14 sm:h-14 bg-light-gray rounded-xl flex items-center justify-center">
                <Image
                  src={icon}
                  alt={name}
                  width={28}
                  height={28}
                  className=" w-6 h-6 sm:w-8 sm:h-8 object-contain shrink-0"
                />
              </div>
              <div className="ml-2 ">
                <h1 className="m-0 font-semibold text-gray-700 dark:text-white whitespace-nowrap shrink-0">
                  {name}
                </h1>
                <p className="text-gray-600 text-sm dark:text-white/80 flex-1 break-words">
                  {des}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  );
};

export default Tools;
