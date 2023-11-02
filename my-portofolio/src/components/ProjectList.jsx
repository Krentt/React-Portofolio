import { getProjectList } from "../projectListData";
import Card from "./Card";

const ProjectList = () => {
  const projects = getProjectList();
  console.log(projects);
  return (
    <div className="grid lg:grid-cols-3 lg:w-4/5 gap-4">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
