import React from "react";

import saly from "../saly.svg";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaBlog } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className=" flex mx-auto">
      <div className="hidden xl:block max-w-[450px] w-[70vw]">
        <Image src={saly} className="" alt={"contact-img"} />
        <div className="flex gap-x-10 mt-5 justify-center mx-auto">
          <Link href="https://github.com/stellaWangg" target="_blank">
            <FaGithub className="icons icon-hover" />
          </Link>
          <Link href="https://www.linkedin.com/in/stellawangg/" target="_blank">
            <FaLinkedin className="icons icon-hover" />
          </Link>
          <Link href="mailto:stellawang827@gmail.com" target="_blank">
            <FaEnvelope className="icons icon-hover" />
          </Link>
          <Link href="https://stellawangg.github.io/" target="_blank">
            <FaBlog className="icons icon-hover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
