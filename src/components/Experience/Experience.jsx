import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 font-sans bg-skills-gradient clip-path-custom-2">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line - hidden on mobile, shown on larger screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/30 h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative mb-12 md:mb-16">
            {/* Timeline Circle - centered for desktop, left-aligned for mobile */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-8 bg-gray-800 border-4 border-[#8245ec] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div className="flex justify-start md:justify-center">
              <div
                className={`w-full max-w-md md:max-w-lg ml-20 md:ml-0 p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(130,69,236,0.4)] ${
                  index % 2 === 0
                    ? "md:mr-auto md:ml-0 md:translate-x-8"
                    : "md:ml-auto md:mr-0 md:-translate-x-8"
                }`}>
                {/* Header with logo and basic info */}
                <div className="flex items-start space-x-4 mb-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg overflow-hidden border border-white/20">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Role and Company Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 leading-tight">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm md:text-base text-gray-300 mb-2">
                      {experience.company}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 font-medium">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div>
                  <h5 className="font-semibold text-white mb-3 text-sm md:text-base">
                    Skills & Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-[#8245ec]/80 hover:bg-[#8245ec] text-white px-3 py-1 text-xs md:text-sm rounded-full border border-[#8245ec]/50 transition-colors duration-200 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
