import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { learningSkills, skills, softSkills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AnimationOnScroll initiallyVisible = {false} animateIn={"animate__rotateIn"}>
            <ChipIcon className="w-10 inline-block mb-4" />
          </AnimationOnScroll>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are some languages and frameworks I've learnt throughout my academic career and personal projects.
            <br></br>
            In the first section, green denotes skills I'm proficient and confident using.
            <br></br>
            In the second section, yellow denotes skills I'm currently learning but feel comfortable using.
            <br></br>
            In the third section, blue denotes soft skills that are relevant to my career path.
          </p>
          
        </div>
        <AnimationOnScroll animateIn="animate__backInUp" animateOut="animate__backOutDown">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-green-500 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-black-500 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInUp" animateOut="animate__backOutDown">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {learningSkills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-yellow-300 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-black-500 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInUp" animateOut="animate__backOutDown">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {softSkills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-blue-500 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-black-800 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}
