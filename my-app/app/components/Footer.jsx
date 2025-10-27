import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2' />
                <div className='w-max mx-auto flex items-center gap-2'>

                    <ul className='flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-10'>
                        <li className='flex items-center gap-2'> <Image src={assets.phone_icon} alt='' className='w-6' />+61 0434012620</li>
                        <li className='flex items-center gap-2'> <Image src={assets.mail_icon} alt='' className='w-6' /><span className='break-all'>vivihuang268@gmail.com</span></li>
                        <li className='flex items-center gap-2'> <Image src={assets.github_icon} alt='' className='w-7' /> <a target='_blank' href="https://github.com/viviyes">GitHub</a></li>
                        <li className='flex items-center gap-2'> <Image src={assets.linkedin} alt='' className='w-6' /> <a target='_blank' href="https://www.linkedin.com/in/yuweihuangvivi">Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <div className='mx-auto text-center sm:flex items-center justify-center border-t border-gray-400 mt-8 py-6'>
                <p>© 2025 Vivi Huang. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer