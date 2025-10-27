"use client"
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = ({isDarkMode}) => {
    return (
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 1 }}
        id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1 , y:0}} transition={{ duration: 0.5, delay:0.3 }}
            className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>
            <motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1 , y:0}} transition={{ duration: 0.5, delay:0.5 }}
            className='text-center text-5xl font-ovo'>About me</motion.h2>
            {/* content part */}
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 0.5, delay:0.3 }}
            className='flex w-full flex-col 2xl:flex-row items-center gap-20 my-20 max-w-5xl mx-auto'>
                {/* left part:pic */}
                <motion.div initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration: 0.6 }}
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt="user" className='w-full rounded-3xl' />
                </motion.div>
                {/* right part */}
                <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 0.6, delay:0.8 }}
                className='flex-1'>
                    <p className='mb-10 max-w-2xl font-ovo'>
                        I develop full-stack applications, connecting back-end logic with responsive front-end design. From setting up databases and APIs to getting projects live on the cloud, I aim to deliver seamless performance and user-friendly interfaces that make every interaction feel effortless. I bring both hands-on project experience and real-world development work from my time in industry.
                    </p>
                    <motion.ul initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 0.8, delay:1 }}
                    className='grid grid-cols-1 sm:grid-cols-1 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li whileInView={{ scale:1.05 }}
                            className='flex flex-col sm:flex-row dark:bg-white/5 border-[0.5px] border-gray-400 rounded-xl  cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-gray dark:border-white dark:hover:shadow-white/30 dark:hover:bg-dark-hover/50  items-start sm:items-center gap-4 px-4 py-3 sm:min-h-20' key={index}>
                                
                               <div className='flex items-center gap-3 2xl:gap-4'>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7' />
                                    <h3 className='m-0 font-semibold text-gray-700 dark:text-white whitespace-nowrap shrink-0'>{title}</h3>
                                </div>
                                <p className='text-gray-600 text-sm dark:text-white/80 flex-1 break-words'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* <motion.h4
                    initial={{ opacity:0, y:20 }} whileInView={{ opacity:1 , y:0}} transition={{ duration: 0.5, delay:1.3 }}
                    className='mt-10 text-gray-700 font-ovo dark:text-white'>Tools I Use</motion.h4>
                    <motion.ul
                    initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 0.6, delay:1.5 }}
                    className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map(({ icon, name }, index)=>(
                            <motion.li
                            whileHover={{ scale:1.1 }}
                            className='relative group flex items-center justify-center w-5 sm:w-14 aspect-square cursor-pointer hover:-translate-y-1 duration-500 dark:border-white'
                            title={name}
                            key={index}>
                                <Image src={icon} alt={name} className='w-5 sm:w-7' />
                                <span className='pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] leading-none text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-white/90 dark:text-black'>
                                    {name}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul> */}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About