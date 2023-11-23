import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div
        id="content"
        className="px-4 md:px-[15%] overflow-x-hidden overflow-y-hidden"
      >
        <Intro />
        <About />
        <Experience />
        <Project />
      </div>
      <footer className="lg:sticky bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
