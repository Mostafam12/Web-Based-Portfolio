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
                        text="Hi, I'm Mostafa, Welcome to my web based portfolio!"
                        typeSpeed={100}
                    />
          <p className="mb-8 leading-relaxed">
            I'm a third-year undergraduate student at the University of Alberta currently taking a Specialization in Computer Science.
            I'm passionate about computer science and technology, and I'm always looking for ways to expand my knowledge and skills in these fields.
          </p>

          <p className="mb-8 leading-relaxed">
            I have a strong academic background in computer science with a focus on data analysis, management and machine learning.
            I have completed courses in File and Database Management, Algorithms and Data Structures, Formal Systems 
            & Mathematical Logic, Visual Recognition, Information Retrieval, Object-oriented design, and 
            Machine Learning & Intelligent Systems.
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/Mostafam12/Resume/blob/main/Mostafa%20Mahmoud%20-%20Software%20Engineer%20Internship%20Resume.pdf"
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
