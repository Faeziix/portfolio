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

function ProjectCard({ project }: { project: Project }) {
  const { name, imgSrc, link, description, pageLink } = project;
  return (
    <div key={name} className="w-1/3 p-2">
      <div className="border-2 border-cyan-300 h-full rounded-lg p-4">
        <Link
          href={pageLink}
          className="flex flex-col gap-2 hover:text-blue-400"
        >
          <Image
            src={imgSrc}
            alt={name}
            className="w-full mb-4"
            width={400}
            height={200}
          />
        </Link>
        <h2 className="text-xl text-left flex gap-1">
          {name}
          <Link href={link} className="text-blue-400">
            <RxExternalLink />
          </Link>
        </h2>
        <p className="text-stone-300 text-left">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
