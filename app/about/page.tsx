import React from "react";
import aboutImg from "../about/about.png";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <div className="bg-stone-300 pt-20 pb-16">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article className="hiddenmd:block">
          <Image src={aboutImg} alt="heroImg" width={450} />
        </article>
        <article>
          <h1 className="text-5xl text-center sm:text-6xl lg:text-7xl text-stone-900 font-bold tracking-wider">
            About Me
          </h1>
          <p className="mt-3 text-xl font-semibold lg:text-3xl text-center  text-stone-800 capitalize tracking-wide">
            Full-stack / Front-end Developer
          </p>
          <p className="mt-2 text-lg text-stone-700 tracking-wide">
            Hi! My name is Stella. I love turning my passion for human rights
            and my experience as a woman of color into impactful digital
            creations through coding and design, aiming for better societal
            change. With a BA in Translation and a MSc in Interactive Media, I
            can seamlessly blend linguistics with technology. My fluency in
            English, Chinese, and Japanese gives me cross-cultural communication
            skill and multicultural perspective.
          </p>
          <p className="mt-2 text-lg text-stone-700 tracking-wide">
            I'm currently volunteering as a front-end developer at{" "}
            <a
              href="https://cofecoders.netlify.app/"
              target="_blank"
              className="underline"
            >
              Cork Female Coders
            </a>
            , fostering a supportive and inclusive community for female coders.
          </p>
          <div className="flex gap-x-4 mt-6">
            <a href="#">
              <FaGithubSquare className="icons icon-hover" />
            </a>
            <a href="#">
              <FaLinkedin className="icons icon-hover" />
            </a>
          </div>
          <div className="mt-8 flex flex-row gap-4">
            <a
              href="https://stellawangg.github.io/Stella_Wang_CV.pdf"
              className="button button-hover"
              target="_blank"
            >
              View Resume
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
