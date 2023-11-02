import Carousel from "./Carousel";
import ProjectList from "./ProjectList";

const Project = () => {
  return (
    <div id="projects" className="mt-20">
      <div id="projects-header">
        <h1 className="lg:text-3xl text-2xl font-bold pb-2 text-gray-500">
          /projects
        </h1>
      </div>
      <div id="projects-contents" className="mt-4 flex flex-col gap-8">
        <Carousel />
        <ProjectList />
      </div>
    </div>
  );
};

export default Project;
