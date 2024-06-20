import "./skills.scss";
import Hyprland from "@/public/hyprland.svg";
import Image from "next/image";

import {
  SiAdobexd,
  SiAntdesign,
  SiArtixlinux,
  SiCss3,
  SiDjango,
  SiExpress,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNeovim,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiReactquery,
  SiSass,
  SiStrapi,
  SiStripe,
  SiTailwindcss,
  SiTmux,
  SiTypescript,
} from "react-icons/si";

const frameworks = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "React Query",
    icon: <SiReactquery />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "Strapi",
    icon: <SiStrapi />,
  },
  {
    name: "Stripe",
    icon: <SiStripe />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "Django Rest Framework",
  },
];

const tools = [
  {
    name: "Nvim",
    icon: <SiNeovim />,
  },
  { name: "Tmux", icon: <SiTmux /> },
  { name: "Artix Linux", icon: <SiArtixlinux /> },
  {
    name: "Hyprland",
    icon: <Image className="w-[44px]" src={Hyprland} alt="Hyprland" />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    name: "Adobe XD",
    icon: <SiAdobexd />,
  },
];

const programmingLanguages = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "SCSS",
    icon: <SiSass />,
  },
];

const skillsList = [
  {
    category: "Languages",
    items: programmingLanguages,
    categoryStyle: { gridTemplateColumns: "repeat(3, auto)" },
  },
  {
    category: "Frameworks & Libraries",
    items: frameworks,
    categoryStyle: { gridTemplateColumns: "repeat(auto-fit,112px)" },
  },
  {
    category: "Tools",
    items: tools,
    categoryStyle: { gridTemplateColumns: "repeat(3, auto)" },
  },
];

export const Skills = (props: {}) => {
  return (
    <div className="relative mx-auto mb-xl">
      <div className="z-30">
        <h2 id="skills" className="scroll-mt-24 pt-10 text-center">
          Skills
        </h2>
        <div className="z-20 mx-auto mt-24 flex max-w-7xl flex-col flex-wrap items-stretch justify-evenly gap-xl text-center lg:flex-nowrap">
          {skillsList.map((skill, index) => (
            <div className="flex md:flex-row flex-col items-center md:items-start w-full md:gap-xl gap-md justify-between" key={index}>
              <h3 className="md:w-40 text-xl text-left">{skill.category}</h3>
              <div className="md:grid flex flex-wrap justify-center lg:grid-cols-6 md:grid-cols-4 gap-sm">
                {skill.items.map((item, index) => (
                  <div
                    className="flex aspect-square sm:w-28 w-24 flex-col items-center justify-center gap-1 rounded-lg border-2 border-solid border-cyan-200 bg-slate-950 p-3 text-5xl"
                    key={index}
                  >
                    {item.icon}
                    <p className="mt-1 mb-0 text-xs font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
