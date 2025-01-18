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
            I recently graduated from the University of Alberta with a Bachelor of Science with specialization in Computer Science. My journey has been defined by a passion for technology, learning and problem solving, complemented by internship experience across diverse roles in software development and data analysis.
          </p>

          <p className="mb-8 leading-relaxed">
            Throughout my career, I’ve contributed to innovative projects in multiple capacities:
          </p>
          <ul className="mb-8 leading-relaxed list-disc list-inside">
            <li><strong>AI Water CleanTech Engineer:</strong> Enhanced data analysis efficiency by designing robust pipelines, integrating APIs like PubChem, and deploying scalable cloud services.</li>
            <li><strong>Research Technology Intern:</strong> Developed backend software for research tools, implemented seamless data integration systems, and ensured data integrity for impactful research projects.</li>
            <li><strong>SQL Developer:</strong> Architected secure, high-performance relational databases and optimized data queries to support scalable applications.</li>
            <li><strong>Business Operations Analyst:</strong> Streamlined workflows and performed cost analyses to help startups optimize operations and remain competitive.</li>
          </ul>


          <p className="mb-8 leading-relaxed">
            These experiences have equipped me with a strong foundation in software development and data analysis. I’m passionate about creating impactful solutions and am actively seeking opportunities to apply my expertise in innovative projects.

Explore my portfolio to learn more about my journey and the projects I’ve worked on!
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
