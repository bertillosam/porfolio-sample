import React from "react";
import logo from "../images/linkedin.svg";
import face from "../images/facebook.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent leading-right">
          Hello! I'm Sam Bertillo
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I’m a full-stack developer with hands-on experience in building
          responsive web applications using React.js and TailwindCSS. I enjoy
          turning complex ideas into clean, user-friendly interfaces and have a
          solid foundation in both front-end and back-end development. I’m
          always eager to learn new technologies and contribute to projects that
          require both creative problem-solving and technical execution.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/sam-edward-bertillo-7729931ab/"
            className="bg-blue-500 text-white font-extrabold py-2 px-3 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) flex flex-col]"
          >
            Linked <img className="h-6" src={logo} />
          </a>
          <a
            href="https://www.facebook.com/BertilloSam/"
            className="bg-blue-500 text-white font-extrabold  rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) flex flex-col] "
          >
            <img className="h-10 hover:animate-spin" src={face} />
          </a>
          <a
            href="#contact"
            className="bg-black text-blue py-2 px-3 border-1 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-green-400 hover:text-black hover:animate-pulse"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
