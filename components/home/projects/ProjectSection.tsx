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
      <div className={`h-full grid grid-cols-2 rounded-lg p-4 gap-10`}>
        <div
          className={
            direction === Direction.Left ? "order-first" : "order-last"
          }
        >
          <h2 className="text-xl mb-md text-left flex gap-1">
            {name}
            <Link href={link} className="text-blue-400">
              <RxExternalLink />
            </Link>
          </h2>
          <p className="text-stone-300 text-lg leading-8 text-left">{description}</p>
        </div>
        <div>
          <Link
            href={pageLink}
            className="flex flex-col gap-2 hover:text-blue-400"
          >
            <Image
              src={imgSrc}
              alt={name}
              className="w-full mb-4 rounded-md border-2 border-cyan-300 hover:border-blue-400"
              width={800}
              height={400}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
