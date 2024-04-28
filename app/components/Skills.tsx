import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiAmazonrds,
  SiMysql,
} from "react-icons/si";
import { FaReact, FaHtml5, FaGitAlt, FaNode } from "react-icons/fa";
import Title from "./Title";

const Skills = () => {
  return (
    <section id="skills" className="my-30 align-element py-20">
      <Title title="Skills" />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center text-2xl font-medium text-neutral-900 gap-16">
        <div className="flex flex-col items-center gap-1 text-center">
          <SiNextdotjs className="text-7xl" />
          <p>Next.js</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <FaReact className="text-7xl" />
          <p>React Native</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <FaHtml5 className="text-7xl" />
          <p>HTML5</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiJavascript className="text-7xl" />
          <p>JavaScript</p>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <SiTypescript className="text-7xl" />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiTailwindcss className="text-7xl" />
          <p>Tailwind</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiAmazonrds className="text-7xl" />
          <p>RESTful API</p>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <FaNode className="text-7xl" />
          <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiMysql className="text-7xl" />
          <p>MySQL</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <FaGitAlt className="text-7xl" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
