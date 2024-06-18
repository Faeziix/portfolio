import UDJA from "@/public/projects/udja/udja.png";
import DentalPic from "@/public/projects/dental/dental-clinic.png";
import CSJWikiPic from "@/public/projects/csj-wiki/csj-wiki.png";
import ProjectSection from "./ProjectSection";

enum Direction {
  Left,
  Right,
}

const projects = [
  {
    name: "Udja",
    tags: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Antd",
      "Framer Motion",
      "Strapi",
      "Django",
      "Django Rest Framework",
    ],
    description: (
      <div>
        <p className="mb-md">
          A educational platform for learning and practicing Jungian Analytical
          Psychology.
        </p>
        <h3 className="text-lg text-left mb-0">Features:</h3>

        <ul className="list-inside list-style-star list-disc ">
          <li>Membership platform</li>
          <li>Typegrid: A personality assessment tool</li>
          <li>Personality test</li>
          <li>Puzzles for practicing typing skills using Typegrid</li>
          <li>
            Journal for users to keep track of thier typings and their notes
          </li>
        </ul>
      </div>
    ),
    imgSrc: UDJA,
    link: "https://udja.app/",
    pageLink: "/projects/udja",
  },
  {
    name: "Dental Clinic",
    tags: ["Nextjs", "Framer Motion", "Tailwind CSS"],
    description:
      "This project is a bi-lingual dental clinic website, created with colaboration with designer friend of mine. The focus of this project is to create a website that is user friendly and responsive with a modern design and animations.",
    imgSrc: DentalPic,
    link: "https://dental-clinic-faeziix.vercel.app/",
    pageLink: "/projects/dental",
  },
  {
    name: "CSJ Wiki",
    description:
      "This is a wiki for all the knowledge about Jungian Analytical Psychology and Typegrid. It has search functionality and users can navigate through the wiki using the sidebar.",
    tags: ["Nextjs", "Tailwind CSS"],
    imgSrc: CSJWikiPic,
    link: "https://wiki.csjoseph.life/",
    pageLink: "/projects/csj-wiki",
  },
];

function HomeProjects() {
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 id="projects" className="mb-20 text-center scroll-mt-24">
        Projects
      </h2>
      <div className="flex flex-col justify-center w-full gap-8">
        {projects.map((project, i) => (
          <ProjectSection
            key={project.name}
            project={project}
            direction={i % 2 === 0 ? Direction.Left : Direction.Right}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeProjects;
