import commerce from "../public/images/fanghua.png";
import dataVis from "../public/images/dataVis.png";
import evo from "../public/images/evo-soft.jpeg";
import argos from "../public/images/argos.png";
import movie from "../public/images/documentary.png";

export const projects = [
  {
    id: 1,
    title: "Fanghua E-commerce",
    tags: [
      "React",
      "React Router v6",
      "Context API",
      "Styled Components",
      "Auth0",
      "Stripe",
      "Airtable",
      "Formspree",
    ],
    img: commerce,
    description:
      "An interactive E-commerce website for Fanghua Paper Company. Payments are securely handled through Stripe, and contact form submissions are handled through Formspree.",
    siteURL: "https://fanghua.netlify.app/",
    github: "https://github.com/stellaWangg/fanghua-store",
  },
  {
    id: 2,
    title: "Human Rights DataViz Project",
    tags: ["React", "Stripe", "JavaScript", "D3", "Blender", "Three"],
    img: dataVis,
    description:
      "A web-based data visualization website for human rights issues. Data visualization handled by using D3 library.",
    siteURL: "https://datavisstella.web.app/",
    github: "https://github.com/stellaWangg/Dataviz-project",
  },
  {
    id: 3,
    title: "Evo-soft Ireland",
    tags: ["JavaScript", "CSS", "HTML"],
    img: evo,
    description:
      "A functional prototype for Evo-soft company using JS, HTML and CSS",
    siteURL: "https://github.com/stellaWangg/evo-prototype",
    github: "https://github.com/stellaWangg/evo-prototype",
  },
  {
    id: 4,
    title: "Argos Ireland",
    tags: ["JavaScript", "CSS", "HTML"],
    img: argos,
    description:
      "A functional prototype for Argos Ireland company using JS, HTML and CSS",
    siteURL: "https://stellawangg.github.io/argos_redesign/",
    github: "https://github.com/stellaWangg/argos_redesign",
  },
  {
    id: 5,
    title: "Ireland's Forgotten Railways",
    tags: ["Final Cut Pro", "Logic Pro"],
    img: movie,
    description: "A documentary for Irish abandoned railways.",
    siteURL: "https://youtu.be/TQKRfcxNdNE?si=nTPoWU2hssUjInuz",
    github: "https://youtu.be/TQKRfcxNdNE?si=nTPoWU2hssUjInuz",
  },
];
