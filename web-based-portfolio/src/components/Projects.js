import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AnimationOnScroll initiallyVisible = {false} animateIn={"animate__rotateIn"}>
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          </AnimationOnScroll>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below is a showcase of the projects I've worked on so far that I've found interesting and challenging. Click on any project to be redirected to the code!
          </p>
        </div>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                key={project.image}
                className="sm:w-1/2 w-full h-[300px] p-4">
                <div className="flex relative hover:scale-110">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}
