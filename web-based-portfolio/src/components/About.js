import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <TypeWriterEffect
                        textStyle={{ fontFamily: 'American Typewriter, serif', color: 'white', fontSize: "35px" }}
                        startDelay={100}
                        cursorColor="white"
                        text="Hi, I'm Mostafa, Welcome to my web-based portfolio!"
                        typeSpeed={100}
                    />
          <p className="mb-8 leading-relaxed">
            I'm a fourth-year undergraduate student at the University of Alberta currently enrolled in a Specialization in Computer Science program.
            I'm passionate about computer science and technology, and I'm always looking for ways to expand my knowledge and skills in these fields.
          </p>

          <p className="mb-8 leading-relaxed">
            I am currently working as a Research Analyst Intern at the University of Alberta, where I've had the opportunity to closely collaborate with researchers, diving deep into their needs and crafting user-friendly interfaces to enhance their workflows.
                          My role often sees me meticulously handling data, ensuring its accuracy, consistency, and integrity, which is vital for the success of research projects. 
                          Beyond the technical tasks, I've taken an active role in knowledge sharing, assisting in drafting documentation, troubleshooting guides, and knowledge base articles. This not only streamlines processes but also empowers researchers to troubleshoot independently. 
                          Moreover, I provide hands-on technical support, addressing both hardware and software challenges faced by researchers.            
            
                          </p>

          <p className="mb-8 leading-relaxed">
            I have a strong academic background in computer science with a focus on data analysis, management, and machine learning.
            I have completed courses in File and Database Management, Algorithms and Data Structures, Formal Systems 
            & Mathematical Logic, Visual Recognition, Information Retrieval, Object-oriented design, Software Practices, Natural-Language Processing, Mobile App Development, and  
            Machine Learning & Intelligent Systems.
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/Mostafam12/Resume/blob/main/Mostafa%20Mahmoud%20Resume.pdf"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              My Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./image.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
