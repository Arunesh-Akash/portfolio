import React from 'react'
import Persistent from '../assets/persistent.jpg'

const Experiance = () => {
    return (
        <div
            name="experiance"
            className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Experiances
                    </p>
                </div>
                <div className='shadow-white shadow-sm rounded-md p-4'>
                    <div className='flex items-center'>
                        <img src={Persistent} alt='' className='h-10 w-10 rounded-full' />
                        <h3 className='text-lg font-semibold ml-14'>Software Engineer : Persistent Systems Limited</h3>
                    </div>
                    <h3 className='mt-4 italic'>July 2022 - Present</h3>
                    <p className="text-base mt-4">

                        I worked as a backend developer for 1.5 years on IBM Rhapsody project, utilizing Node.js as the primary technology stack. In
                        this role, I contributed to the development and maintenance of backend systems., leveraging Node.js to build scalable and
                        efficient server-side applications. My responsibilities include implements RESTful APIs, handling data processing tasks and
                        ensuring system reliability and performance. Through this experience, I gained proficiency in Node.js development practices
                        and acquired valuable insights into enterprise-level software development within the IBM ecosystem.
                    </p>
                </div>

                <div className='shadow-white shadow-sm rounded-md p-4 mt-6'>
                    <div className='flex items-center'>
                        <img src={Persistent} alt='' className='h-10 w-10 rounded-full' />
                        <h3 className='text-lg font-semibold ml-14'>Academic Intern : Persistent Systems Limited</h3>
                    </div>
                    <h3 className='mt-4 italic'>February 2022 - July 2022</h3>
                    <p className="text-base mt-4">

                        Interned for 6 months, specializing in the .NET technology stack. Developed applications, managed databases and integrated
                        systems using C# and ASP.NET. Proficient in writing clean code, debugging and collaborating with teams to deliver quality
                        solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Experiance