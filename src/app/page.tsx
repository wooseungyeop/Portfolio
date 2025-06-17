"use client";

import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import About from "./components/About";
import { projects } from "./data/projects";

export default function Home() {

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 py-20">
      <h1 className="text-7xl font-bold text-gray-800 mb-16 text-center">
        Projects
      </h1>

      <div className="space-y-24 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
      </div>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
      <section id="about">
        <About />
      </section>
    </section>
  );
}
