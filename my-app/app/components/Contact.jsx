import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0c09d6b4-fc77-409a-bf5d-6b35450c061d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-center bg-no-repeat bg-[length:90%_auto] dark:bg-none'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>Contact with me</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>Let's work together!</motion.h2>

            <motion.p
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I'd love to hear from you! Whether you have a question, a comments, a feedback, or just want to say hi, please feel free to reach out.
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input
                        initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}
                        type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name='name' />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}
                        type="text" placeholder='Enter your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name='email' />
                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.3 }}
                    rows="6" placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-white/90' name='message'></motion.textarea>
                <motion.button
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}
                    type='submit' className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black hover:cursor-pointer duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'>
                    Submit now <Image src={assets.right_arrow_white} alt='' width={16} height={16} className='w-4' />
                </motion.button>
                <p className='mt-4'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact