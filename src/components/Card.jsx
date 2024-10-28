import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { FiExternalLink } from "react-icons/fi"; // Import External Link icon
import { motion } from "framer-motion";

const Card = ({ title, imgUrl, repoLink, demoLink, description, workInProgress }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      
        <img className="rounded-t-lg w-full h-36 object-cover" src={imgUrl} alt={title} />
     
      <div className="flex-1 p-5 flex flex-col">
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
      
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2 overflow-hidden text-ellipsis whitespace-nowrap mb-2">
          {description}
        </p>
        <div className="mt-auto flex items-center space-x-4">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition duration-300 ease-in-out"
            aria-label="GitHub repository"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          {workInProgress ? (
            <span className="inline-flex items-center py-1 px-3 text-sm font-medium text-white bg-yellow-400 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-yellow-500">
              Work in Progress
            </span>
          ) : (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <FiExternalLink className="mr-1" /> View Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
