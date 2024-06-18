"use client";
import Hero from "@/components/home/hero/hero";
import { Skills } from "@/components/home/skills/skills";
import HomeProjects from "@/components/home/projects/projects";
import AboutMe from "@/components/home/about-me/AboutMe";
import Contact from "@/components/home/contact/Contact";
import React from "react";

function App() {
  return (
    <div className="relative">
      <Hero />
      <div className="space-y-2xl px-10 pb-2xl">
        <AboutMe />
        <Skills />
        <HomeProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
