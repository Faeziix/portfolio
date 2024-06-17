import Hero from "@/components/home/hero/hero";
import { Skills } from "@/components/home/skills/skills";
import HomeProjects from "@/components/home/projects/projects";
import AboutMe from "@/components/home/about-me/AboutMe";
import Contact from "@/components/home/contact/Contact";

function App() {
  return (
    <div id="main" className="relative">
      <Hero />
      <div className="space-y-2xl pb-2xl px-10">
        <AboutMe />
        <Skills />
        <HomeProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
