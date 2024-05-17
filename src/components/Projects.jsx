import React from 'react'
import Todo from '../assets/todo.png';
import Ecomm from '../assets/ecomm.png';
import Chat from '../assets/chat.png';
import Url from '../assets/url.png'
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Ecomm,
      view: "https://e-commerce-nextjs-ecru.vercel.app/",
      repo: "https://github.com/Arunesh-Akash/e-commerce-nextjs"
    },
    {
      id: 2,
      src: Chat,
      view: "https://chat-app-static.onrender.com/",
      repo: "https://github.com/Arunesh-Akash/Chat-App-UI"
    },
    {
      id: 3,
      src: Url,
      view: "",
      repo: "https://github.com/Arunesh-Akash/url-shortner-UI"
    },
    {
      id: 4,
      src: Todo,
      view: "https://todo-list-ui-5qxg.onrender.com/",
      repo: "https://github.com/Arunesh-Akash/Todo-List-UI",
    },

  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Personal Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, view, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center text-sm">
                <div className="w-1/2 px-6 py-3 m-4 duration-200 flex justify-center items-center cursor-pointer hover:scale-105">
                  <div> <LiaExternalLinkAltSolid /></div>
                  <a href={view}><span className='ml-1'>View</span></a>
                </div>

                <div className="w-1/2 px-6 py-3 m-4 duration-200 flex justify-center items-center cursor-pointer hover:scale-105">
                  <div> <LiaExternalLinkAltSolid /></div>
                  <a href={repo}><span className='ml-1'>Repo</span></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects