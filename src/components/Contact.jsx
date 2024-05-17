import React from 'react'
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { MdCopyright } from "react-icons/md";
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
    return (
        <div name="contact" className="w-full bg-gradient-to-b from-black via-black to-gray-800 ">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-white">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                </div>
                <div className='flex justify-center items-center gap-20 mt-10'>
                <a className='flex justify-center items-center gap-3 hover:bg-gray-700 rounded-lg p-2' href='https://github.com/Arunesh-Akash'>

                    <FaGithub />
                    <p>GitHub</p>

                </a>
                <a className='flex justify-center items-center gap-3 hover:bg-gray-700 rounded-lg p-2' href='https://www.linkedin.com/in/arunesh-akash-a358061bb'>
                    <FaLinkedin />
                    <p>LinkedIn</p>
                </a>
                <a className='flex justify-center items-center gap-3 hover:bg-gray-700 rounded-lg p-2' href="mailto:akashkr099@gmail.com">
                    <HiOutlineMail />
                    <p>E-Mail</p>
                </a>
                <div className='flex justify-center items-center gap-3 hover:bg-gray-700 rounded-lg p-2'>
                    <FaPhoneAlt />
                    <p>+91-9955235611</p>
                </div>

                </div>
                <div className='flex justify-center items-center flex-row gap-2 mt-2'>
                    <span>Copyright</span>
                    <span><MdCopyright size={15}/></span>
                    <span className='text-blue-600'>Arunesh Akash</span>
                    <span> - All rights reserved 2024</span>
                </div>
            </div>
        </div>
    )
}

export default Contact