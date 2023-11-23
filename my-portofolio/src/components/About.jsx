import Aos from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div id="about" className="mb-8" data-aos="fade-up" data-aos-once="true">
      <div id="about-header">
        <h1 className="lg:text-3xl text-2xl font-bold pb-2 text-gray-500">
          /about-me
        </h1>
      </div>
      <div
        id="about-content"
        className="flex flex-row lg:text-start text-justify lg:text-xl text-lg px-3"
      >
        <div id="about-content-description">
          <p className="mb-2">
            I&apos;m a final-year student studying{" "}
            <span className="text-gray-600 font-bold">Information Systems</span>{" "}
            at
            <b> University of Indonesia</b>. As a{" "}
            <span className="text-gray-600 font-bold">
              Software Engineer Intern
            </span>
            &nbsp;at <b>Metrodata Electronics Tbk</b>, I&apos;m actively
            involved in backend development, specializing in microservices with
            technologies like Spring Boot and Redis.
          </p>
          <p className="mb-3">
            Here are some tech stacks I have been working with:
          </p>
          <ul className="grid grid-cols-2 gap-1 auto-cols-max list-disc list-inside lg:w-[40%] mb-3">
            <li>Spring Boot</li>
            <li>SQL</li>
            <li>Java</li>
            <li>Python</li>
            <li>Kotlin</li>
            <li>Flutter (Dart)</li>
            <li>React.js</li>
            <li>HTML & CSS</li>
          </ul>
          <p className="">
            Outside of work, I am passionate about <b>continuous learning</b>{" "}
            and <b>exploring new horizons</b> in the world of technology.
            Currently, I am expanding my skill set by delving into{" "}
            <span className="text-gray-600 font-bold">Go programming</span>.
            Additionally, I enjoy participating in bootcamps to immerse myself
            in different programming languages and frameworks.
          </p>
        </div>
        <div
          id="about-content-image"
          className="hidden lg:flex self-start justify-center"
        >
          <img
            className="rounded-xl shadow-xl max-w-[55%] hover:-translate-y-3"
            src="marvel.jpg"
            alt="profile picture"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
