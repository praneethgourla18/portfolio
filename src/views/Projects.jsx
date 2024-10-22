import React, { useContext, useState } from "react";
import { ThemeContext } from "../themeProvider";
import Card from "../components/Card";
import { projectsData } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // State to track whether all projects are shown or just the first 3
  const [showMore, setShowMore] = useState(false);

  // Show first 3 projects if 'showMore' is false, otherwise show all
  const visibleProjects = showMore ? projectsData : projectsData.slice(0, 3);

  return (
    <div
      id="projects"
      className={`pt-24 pb-16 ${darkMode ? "bg-gray-200" : "bg-gray-900 text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-8">Projects</h2>
        <p className="text-gray-600 text-xl text-center mb-12">
          Here are some of my projects. Click on the titles to learn more!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <Card 
              key={index} 
              title={project.title} 
              imgUrl={project.imageUrl} 
              repoLink={project.repoLink} 
              demoLink={project.demoLink} 
              description={project.description} 
              workInProgress={project.workInProgress}
            />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
