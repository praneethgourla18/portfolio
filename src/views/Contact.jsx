import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      className={`pt-24 pb-16 ${darkMode ? "bg-gray-100" : "bg-black text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-6">Connect with me</h2>
        <p className="text-gray-500 text-xl text-center mb-12">
          If you want to know more about me or my work, or if you would just
          <br />
          like to say hello, send me a message. I'd love to hear from you.
        </p>

        {/* Contact Form Section */}
        <div className="flex flex-col max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className={`block mb-2 text-lg font-medium ${
                  darkMode ? "text-gray-900" : "text-gray-800"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`border border-gray-300 rounded-lg p-2.5 w-full ${
                  darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-50 text-gray-800"
                }`}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className={`block mb-2 text-lg font-medium ${
                  darkMode ? "text-gray-900" : "text-gray-800"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`border border-gray-300 rounded-lg p-2.5 w-full ${
                  darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-50 text-gray-800"
                }`}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className={`block mb-2 text-lg font-medium ${
                  darkMode ? "text-gray-900" : "text-gray-800"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                className={`border border-gray-300 rounded-lg p-2.5 w-full h-28 ${
                  darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-50 text-gray-800"
                }`}
                placeholder="Enter your message"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Email Section */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => window.location.href = "mailto:praneethgourla@gmail.com"}
            className={`mt-4 bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          >
            Email me here!
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full text-lg py-3 flex justify-center mt-20 font-serif">
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Praneeth Gourla
      </div>
    </div>
  );
};

export default Contact;
