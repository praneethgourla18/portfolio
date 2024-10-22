import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-4xl md:text-5xl font-bold text-center"
              : "text-4xl md:text-5xl font-bold text-center text-white"
          }
        >
          About Me
        </h2>

        <motion.div>
          <p
            className={
              darkMode
                ? "mt-6 text-lg md:text-xl text-justify text-gray-500"
                : "mt-6 text-lg md:text-xl text-justify text-white"
            }
          >
            I'm a passionate Information Technology student with a strong foundation in software development. I specialize in building scalable applications using React, Java, and modern web technologies. I focus on delivering seamless user experiences and robust architectures, while continuously improving my skills.
          </p>
        </motion.div>

        <motion.div className="mt-12">
          <h4 className="text-2xl md:text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p
            className={
              darkMode
                ? "mt-4 text-lg md:text-xl text-justify text-gray-500"
                : "mt-4 text-lg md:text-xl text-justify text-white"
            }
          >
            Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, performant websites for smartphones, tablets, and desktops.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap mt-8 justify-between">
          {techStack.map((el, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
              className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
            >
              <img alt="" src={el.link} className="w-12" />
              <h4 className="text-md ml-4">{el.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
