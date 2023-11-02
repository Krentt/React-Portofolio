import { useEffect } from "react";
import VerticalTabs from "./VerticalTabs";
import Aos from "aos";

const Experience = () => {

  useEffect(() => {
    Aos.init({
      duration:1400
    })
  })

  return (
    <div id="experience" className="mt-20" data-aos="fade-up" data-aos-once="true">
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
