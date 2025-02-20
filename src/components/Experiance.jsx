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
                        Work Experiance
                    </p>
                </div>
                <div className='shadow-white shadow-sm rounded-md p-4'>
                    <div className='flex items-center'>
                        <img src={Persistent} alt='' className='h-10 w-10 rounded-full' />
                        <h3 className='text-lg font-semibold ml-14'>Senior Software Engineer : Persistent Systems Limited</h3>
                    </div>
                    <h3 className='mt-4 italic'>Aug 2022 - Present</h3>
                    <p className="text-base mt-4">
                        Project IBM: -
                        <ul style={{listStyleType:'disc', paddingLeft:'20px', paddingTop:'10px'}}>
                            <li>Developed and maintained scalable backend systems using Node.js, optimizing database interactions,
                                caching strategies, and performance tuning for high-traffic applications.</li>
                            <li>Designed and implemented RESTful APIs, ensuring efficient data processing, seamless third-party
                                integrations, and adherence to industry standards.</li>
                            <li>Built and optimized frontend applications using React, enhancing user experience, improving load times, and
                                ensuring responsiveness across devices.</li>
                            <li>Integrated real-time communication and third-party services, utilizing WebRTC for video calls, Socket.io for
                                live messaging, and cloud-based APIs for extended functionality.</li>
                            <li>Implemented secure authentication and authorization mechanisms, leveraging JWT, OAuth, and role-based
                                access control (RBAC) to ensure data protection and compliance.</li>
                            <li>Followed Agile methodologies using Jira for project management and GitLab for version control, ensuring
                                smooth collaboration, code quality, and continuous integration.</li>
                        </ul>
                    </p>
                </div>

                <div className='shadow-white shadow-sm rounded-md p-4 mt-6'>
                    <div className='flex items-center'>
                        <img src={Persistent} alt='' className='h-10 w-10 rounded-full' />
                        <h3 className='text-lg font-semibold ml-14'>Software Engineer Intern : Persistent Systems Limited</h3>
                    </div>
                    <h3 className='mt-4 italic'>February 2022 - July 2022</h3>
                    <p className="text-base mt-4">
                        <ul style={{listStyleType:'disc', paddingLeft:'20px'}}>

                            <li>Developed expertise in React framework for application development during internship.</li>
                            <li>Strengthened technical foundation in MongoDB, JavaScript, React, Node.js, TypeScript, ES6, Git,
                                and Object-Oriented Programming (OOPs). </li>
                            <li>Gained practical experience in Python and UNIX environments.</li>
                            <li> Achieved outstanding performance evaluations with a 90% rating.</li>
                            <li>Demonstrated proficiency with hands-on assessments, scoring 89%.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Experiance