import React from "react";
import aboutImg from "../about/about.png";
import Image from "next/image";
import Link from "next/link";
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
          <p className="mt-2 text-lg text-stone-700 tracking-wide">
            Hi! This is Stella. With a BA in Translation and a MSc in
            Interactive Media, I can seamlessly blend linguistics with
            technology. My fluency in English, Chinese, and Japanese gives me
            cross-cultural communication skill and multicultural perspective. I
            love turning my passion for human rights and my experience as a
            woman of color into impactful digital creations through coding and
            design, aiming for better societal change.
          </p>
          <p className="mt-2 text-lg text-stone-700 tracking-wide">
            I'm currently working as a Full-stack Engineer at Marsh Innovation
            Centre. Shipping enterprise-level applications and building
            AI-powered solutions for clients.
          </p>
          <div className="flex gap-x-4 mt-6">
            <Link href="https://github.com/stellaWangg">
              <FaGithubSquare className="icons icon-hover" />
            </Link>
            <Link href="https://www.linkedin.com/in/stellawangg/">
              <FaLinkedin className="icons icon-hover" />
            </Link>
          </div>
          <div className="mt-8 flex flex-row gap-4">
            <Link
              href="https://stellawangg.github.io/Stella_Wang_CV.pdf"
              className="button button-hover"
              target="_blank"
            >
              View Resume
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
