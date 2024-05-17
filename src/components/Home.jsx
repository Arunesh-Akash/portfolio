import React from 'react'
import Image from '../assets/heroImage.jpeg'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
                <div>
                    <img
                        src={Image}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-20 md:w-full"
                        style={{ marginTop: '29px' }}
                    />
                </div>
                <div className="flex flex-col justify-center h-full ml-10">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a <Typewriter
                            options={{
                                strings: ['Arunesh Akash', 'Software Engineer', 'Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    My passion for coding and problem-solving motivates me to continuously learn and stay up-to-date with the latest technologies and industry trends. I am a collaborative team player and have excellent communication skills, making me a valuable asset to any project.
                    </p>

                    <div className='flex gap-5'>
                        <Link to='contact' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Contact
                            <span className="group-hover:rotate-90 duration-300 ">
                                <MdOutlineArrowRightAlt size={25} className="ml-1" />
                            </span>

                        </Link>

                        <a href="/Arunesh's resume.pdf" download={true} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
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