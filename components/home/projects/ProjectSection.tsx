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
  const { name, imgSrc, link, description, pageLink } = project;
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
          <p className="text-left text-lg leading-8 text-stone-300">
            {description}
          </p>
        </div>
        <div>
          <Link
            href={pageLink}
            className="flex flex-col gap-2 hover:text-blue-400"
          >
            <Image
              src={imgSrc}
              alt={name}
              className="mb-4 w-full rounded-md border-2 border-cyan-300 hover:border-blue-400"
              width={800}
              height={400}
              placeholder="blur"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
