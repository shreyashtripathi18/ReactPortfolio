import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/ProfilePhoto.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans justify-center mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        {/* Left Section */}
        <div className="md:w-2/3 text-left md:text-left justify-center mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Shreyash Tripathi
          </h2>
          {/* Skills Heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer.",
                "Ethical Hacker.",
                "Bug Hunter.",
                "Coder.",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={1500}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}></ReactTypingEffect>
          </h3>
          {/* About Paragraph */}
          <p className="w-2/3 text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a Full Stack Developer specializing in the MERN stack, with
            hands-on experience building web applications and a strong interest
            in Vulnerability Assessment and Penetration Testing (VAPT). I enjoy
            combining development skills with a security mindset to create
            efficient and secure digital solutions.
          </p>
          {/* Resume Button */}
          <a
            href="#resumeLink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-110"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}>
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>
            <img
              src={profileImage}
              alt="Shreyash Tripathi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
