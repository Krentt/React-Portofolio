import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Project from "./components/Project";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div id="content" className="px-4 md:px-[15%]">
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
