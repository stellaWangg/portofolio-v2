import React from "react";
import heroImg from "../heroImg.svg";
import Image from "next/image";
import Link from "next/link";
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
            Hello, I'm {""}
            Stella Wang
          </h1>
          <p className="mt-4 text-3xl text-stone-800 capitalize tracking-wide">
            Full-stack / Front-end Developer
          </p>
          <p className="mt-2 text-lg text-stone-700 capitalize tracking-wide">
            I'm An Experienced Web developer. I love crafting digital user
            experiences that people enjoy through understanding and empathy.
          </p>
          <div className="flex gap-x-4 mt-10">
            <Link href="https://github.com/stellaWangg">
              <FaGithubSquare className="icons icon-hover" />
            </Link>
            <Link href="https://www.linkedin.com/in/stellawangg/">
              <FaLinkedin className="icons icon-hover" />
            </Link>
          </div>
          <div className="mt-10 flex flex-row gap-4">
            <Link href="#projects" className="button button-hover">
              View Projects <FaArrowAltCircleDown />
            </Link>
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
