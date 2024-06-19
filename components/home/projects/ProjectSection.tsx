import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { RxExternalLink } from "react-icons/rx";

type Project = {
  name: string;
  tags: string[];
  description: string;
  imgSrc: StaticImageData;
  link: string;
  pageLink: string;
  deliverables: string[];
  readMore?: boolean;
};

enum Direction {
  Left,
  Right,
}

type ProjectSectionProps = {
  project: Project;
  direction: Direction;
};

function ProjectSection({ project, direction }: ProjectSectionProps) {
  const { name, imgSrc, link, description, pageLink, deliverables, readMore } =
    project;
  return (
    <div key={name} className="p-2">
      <div
        className={`grid h-full grid-cols-1 gap-md rounded-lg p-4 md:grid-cols-2 md:gap-lg`}
      >
        <div
          className={`${
            direction === Direction.Left ? "md:order-first" : "md:order-last"
          } order-last`}
        >
          <Link href={link} className="text-inherit">
            <h2 className="mb-md flex w-fit gap-1 text-left text-xl">
              {name}
              <RxExternalLink />
            </h2>
          </Link>
          <div className="">
            <p className="text-left leading-8 text-lg text-stone-300">{description}</p>
            <h3 className="mb-xs text-left text-base">My deliverables:</h3>
            <ul className="list-style-star space-y-2 list-inside list-disc">
              {deliverables.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Image
            src={imgSrc}
            alt={name}
            className="mb-4 w-full rounded-md border-2 border-cyan-300"
            width={800}
            height={400}
            placeholder="blur"
          />
        </div>

        {readMore && (
          <Link href={pageLink}>
            <h3 className="text-left text-sm">Read more</h3>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
