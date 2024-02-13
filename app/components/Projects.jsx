import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import Title from "./Title";
const Projects = () => {
  return (
    <div className="bg-stone-200" id="projects">
      <section className="align-element py-20">
        <Title title="Projects" />
        <div className="pt-3 grid lg:grid-cols-2 xl:grid-cols-2 gap-9">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    </div>
  );
};
export default Projects;
