import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  return (
    <div id="top" className="w-full max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={isDarkMode ? assets.user_image_dark : assets.user_image}
            alt=""
            className="w-full h-full object-cover object-[50%_20%]"
          />
        </div>
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I am Vivi Huang{" "}
        <motion.img 
          src={assets.hand_icon.src} 
          alt="" 
          className="w-6"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: [0, 50, 0] }}
          viewport={{ once: false }} // 每次进入视图都触发
          transition={{ 
            duration: 0.6, 
            repeat: 2,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-4xl font-ovo"
      >
        Full stack developer based in Sydney.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I turn ideas into full-stack applications, connecting robust back-end
        logic with beautiful, responsive interfaces.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:text-white dark:border-white"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/vivi_Huang_CV.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black dark:border-white"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
