import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300">
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl lg:w-full w-[95%] max-w-4xl max-h-[90vh] overflow-hidden relative transform transition-all duration-300 scale-100 animate-in slide-in-from-bottom-4">
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 bg-gray-800/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold transition-all duration-200 hover:scale-110 backdrop-blur-sm">
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row overflow-hidden">
              {/* Image Section */}
              <div className="lg:w-1/2 w-full bg-gray-800 flex items-center justify-center p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg border border-gray-600"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full p-6 lg:p-8 overflow-y-auto">
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    {selectedProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-500/30 text-xs font-semibold text-purple-400 rounded-full px-3 py-1.5 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-3 rounded-xl text-center font-semibold transition-all duration-200 hover:scale-105 border border-gray-600 hover:border-gray-500">
                      <span className="text-sm lg:text-base">View Code</span>
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-xl text-center font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                      <span className="text-sm lg:text-base">View Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
