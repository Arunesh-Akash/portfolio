import React from 'react'
import Image from '../assets/heroImage.jpg'
import { MdOutlineArrowRightAlt, MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div
            name="home"
            className="w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-screen px-4 md:flex-row">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={Image}
                        alt="my profile"
                        className="w-56 md:w-72 lg:w-96 rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-center h-full mt-6 md:mt-0 md:ml-10 w-full md:w-1/2">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a <Typewriter
                            options={{
                                strings: ['Arunesh Akash', 'Software Engineer', 'Senior Software Engineer', 'Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    As a Full-Stack developer with around 2.6 years of experience, I specialize in developing and delivering enterprise-grade software solutions. My expertise extends to creating both web and mobile applications. Expertise includes React, Redux, Next.js, React Native, Node.js and Python. 
                    </p>

                    <div className='flex gap-5'>
                        <Link to='contact' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Contact
                            <span className="group-hover:rotate-90 duration-300 ">
                                <MdOutlineArrowRightAlt size={25} className="ml-1" />
                            </span>
                        </Link>

                        <a href="https://docs.google.com/document/d/1baYrmm32KGAF7sbBc9X_y_WJko0hSYRm/edit?usp=sharing&ouid=105390420439993236630&rtpof=true&sd=true" trget="_blank" rel='noreferrer' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            <span>
                                <MdOutlineFileDownload size={15} className='mr-1' />
                            </span>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
