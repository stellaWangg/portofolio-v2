import React from "react";
import heroImg from "../heroImg.svg";
import Image from "next/image";
import {
  FaGithubSquare,
  FaLinkedin,
  FaArrowAltCircleDown,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-stone-300 pt-20 pb-16">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl text-stone-900 font-bold tracking-wider">
            Hello, I&apos;m {""}
            Stella Wang
          </h1>
          <p className="mt-4 text-3xl text-stone-800 capitalize tracking-wide">
            Full Stack Developer
          </p>
          <p className="mt-2 text-lg text-stone-700 capitalize tracking-wide">
            I&apos;m An Experienced Web developer. I like making fun,
            interactive things with code.
          </p>
          <div className="flex gap-x-4 mt-10">
            <a href="#">
              <FaGithubSquare className="icons icon-hover" />
            </a>
            <a href="#">
              <FaLinkedin className="icons icon-hover" />
            </a>
          </div>
          <div className="mt-10 flex flex-row gap-4">
            <a href="#projects" className="button button-hover">
              View Projects <FaArrowAltCircleDown />
            </a>
          </div>
        </article>
        <article className="hidden md:block ">
          <Image src={heroImg} alt="heroImg" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
