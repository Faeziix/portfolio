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
    description:
      "An educational platform for learning and practicing Jungian Analytical Psychology.",
    deliverables: [
      "Migration of the existing membership platform to Next.js and Strapi CMS resulting in 90% cost reduction",
      "Integration of the Stripe payment gateway",
      "Migration from existing react app to Next.js in span of 10 days",
      "Designing and implementing the UI/UX",
      "Developing tools and games for learning and practicing Jungian Analytical Psychology",
      "Markdown support",
    ],
    imgSrc: UDJA,
    link: "https://udja.app/",
    pageLink: "/projects/udja",
  },
  {
    name: "CSJ Wiki",
    description:
      "A wiki for the Jungian Analytical Psychology and the CS Joseph's content.",
    deliverables: ["Search functionality", "File explorer", "Markdown support"],
    imgSrc: CSJWikiPic,
    link: "https://wiki.csjoseph.life/",
    pageLink: "/projects/csj-wiki",
  },
  {
    name: "Dental Clinic",
    description:
      "A bilingual dental clinic website written in Nextjs with a custom language switcher and animations.",
    deliverables: [
      "Effective User Flow and UI/UX",
      "Responsive design",
      "Custom animations",
      "Custom language switcher",
    ],
    imgSrc: DentalPic,
    link: "https://dental-clinic-faeziix.vercel.app/",
    pageLink: "/projects/dental",
  },
];

function HomeProjects() {
  return (
    <div className="mx-auto max-w-7xl">
      <h2 id="projects" className="mb-20 scroll-mt-24 text-center">
        Projects
      </h2>
      <div className="flex w-full flex-col justify-center gap-8">
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
