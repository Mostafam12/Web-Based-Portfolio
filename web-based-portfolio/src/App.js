import React from "react";
import "./index.css"
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useSectionInView } from "./functions/useSectionInView";
import { useRef } from 'react';
import classnames from 'classnames';


export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = [aboutRef, projectsRef, skillsRef, testimonialsRef, contactRef];
  const sectionInView = useSectionInView(refs);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About ref={aboutRef} className={classnames({ 'fade-in': sectionInView === 'about' })} />
      <Projects ref={projectsRef} className={classnames({ 'fade-in': sectionInView === 'projects' })} />
      <Skills ref={skillsRef} className={classnames({ 'fade-in': sectionInView === 'skills' })} />
      {/* <Testimonials ref={testimonialsRef} className={classnames({ 'fade-in': sectionInView === 'testimonials' })} />
      <Contact ref={contactRef} className={classnames({ 'fade-in': sectionInView === 'contact' })} /> */}
    </main>
  );
}

