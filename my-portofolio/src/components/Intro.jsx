import ReactTyped from "react-typed";

/* eslint-disable react/no-unescaped-entities */
const Intro = () => {
  return (
    <div id="intro" className="lg:w-2/5 lg:min-h-screen pt-[15%] text-center lg:text-left lg:mb-0 mb-28">
      <h1 className="text-3xl lg:text-6xl font-bold pb-2 text-gray-500">
        <ReactTyped
          strings={["hello, it's <span class='text-black'>Marvel</span>"]}
          typeSpeed={100}
        />
      </h1>
      <h2 className="text-2xl lg:text-3xl pb-2">I love to create something!</h2>
      <p className="text-lg lg:text-xl pb-8">
        I'm a junior software engineer and data enthusiast based in Jakarta. My
        passion revolves around microservices, backend development, and
        artificial intelligence. Feel free to explore with me as we delve into
        the fascinating realms of technology.
      </p>
      <a
        type="button"
        className="btn btn-neutral"
        href="mailto:marvelkrent@gmail.com"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
          />
        </svg>
        Contact me!
      </a>
    </div>
  );
};

export default Intro;
