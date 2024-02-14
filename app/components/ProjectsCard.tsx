import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  tags: string[];
  img: StaticImageData;
  description: string;
  siteURL: string;
  github: string;
};

function ProjectCard({
  title,
  tags,
  img,
  description,
  siteURL,
  github,
}: Props) {
  return (
    <div className="border flex flex-col gap-5 p-4 rounded-lg bg-white shadow-md">
      <div className="w-full">
        <Image
          src={img}
          width={800}
          height={250}
          className="object-cover"
          alt={`${title} home page`}
          priority
        />
      </div>
      {/* tags */}
      <h3 className="h-15 text-2xl font-semibold sm:h-8 text-accent ">
        {title}
      </h3>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap flex-grow gap-2 ">
          {tags.map((tag, index) => (
            <span
              key={`${tag + index}`}
              className="border self-start px-2 rounded-xl bg-stone-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="flex-grow">{description}</p>

      <div className="flex flex-row gap-4 mt-auto">
        <Link
          href={siteURL}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-1 items-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-100 rounded-xl px-4 py-3 flex-shrink-0"
        >
          Live Site <FaExternalLinkAlt />
        </Link>
        <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-1 items-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-100 rounded-xl px-4 py-3 flex-shrink-0"
        >
          See Code <FaGithub />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
