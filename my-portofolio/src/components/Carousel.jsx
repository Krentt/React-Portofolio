import { getProject } from "../projectData";
import CarouselContent from "./CarouselContent";

const Carousel = () => {
  const projects = getProject();

  return (
    <div className="lg:w-[75%] carousel lg:ml-6">
      {projects.map((project, index) => {
        const prev = index === 0 ? projects.length : index;
        const next = index === projects.length - 1 ? 1 : index + 2;
        return (
          <CarouselContent key={index} {...project} prev={prev} next={next} />
        );
      })}
    </div>
  );
};

export default Carousel;
