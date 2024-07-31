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
    name: "Framer Motion",
    icon: <SiFramer />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "Stripe",
    icon: <SiStripe />,
  },
  {
    name: "Strapi",
    icon: <SiStrapi />,
  },
  {
    name: "Django Rest Framework",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign />,
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
        <h2 id="skills" className="scroll-mt-xl text-center">
          Skills
        </h2>
        <div className="z-20 mx-auto mt-lg flex max-w-7xl flex-col flex-wrap items-stretch justify-evenly gap-xl text-center lg:mt-xl lg:flex-nowrap">
          {skillsList.map((skill, index) => (
            <div
              className="flex w-full flex-col items-center justify-between gap-md md:flex-row md:items-start md:gap-xl"
              key={index}
            >
              <h3 className="text-left text-xl md:w-40">{skill.category}</h3>
              <ul className="flex flex-wrap justify-center gap-sm md:grid md:grid-cols-4 lg:grid-cols-6">
                {skill.items.map((item, index) => (
                  <li
                    className="flex aspect-square w-24 flex-col items-center justify-center gap-1 rounded-lg border-2 border-solid border-cyan-200 bg-slate-950 p-3 text-5xl sm:w-28"
                    key={index}
                  >
                    <span className="text-5xl text-stone-200">{item.icon}</span>
                    <p className="mb-0 mt-1 text-xs font-medium text-stone-200">
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
