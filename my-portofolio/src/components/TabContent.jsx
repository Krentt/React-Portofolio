import Aos from "aos";
import PropTypes from "prop-types";
import { useEffect } from "react";

const TabContent = ({ title, periods, skills, descriptions }) => {

  useEffect(() => {
    Aos.init({duration:1200})
  })

  return (
    <div id="tab-content" data-aos="fade-left" data-aos-once="true">
      <div id="tab-content-header">
        <h1 className="lg:text-xl text-lg font-bold text-gray-500">{title}</h1>
        <h4 className="lg:text-lg italic text-gray-400">{periods}</h4>
      </div>
      <div id="tab-content-body" className="mt-4 lg:w-4/5">
        <ul className="list-disc list-outside pl-5 grid gap-y-">
          {descriptions.map((description, index) => (
            <li className="font-sans lg:text-lg text-justify" key={index}>
              {description}
            </li>
          ))}
        </ul>
        <p className="pl-5 pt-3 font-sans lg:text-lg font-semibold text-gray-500 italic">
          Skills: <span>{skills}</span>
        </p>
      </div>
    </div>
  );
};

TabContent.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  periods: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabContent;
