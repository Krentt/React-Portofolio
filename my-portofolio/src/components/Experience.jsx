import VerticalTabs from "./VerticalTabs";

const Experience = () => {
  return (
    <div id="experience" className="mt-20">
      <div id="experience-header">
        <h1 className="lg:text-3xl text-2xl font-bold pb-2 text-gray-500">
          /my-experiences
        </h1>
      </div>
      <div id="experience-content" className="mt-4">
        <VerticalTabs />
      </div>
    </div>
  );
};

export default Experience;
