import Projects from "./component/Projects";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./Navbar";
import Contact from "./component/Contact";
import HireMe from "./component/HireMe";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <HireMe/>

      </div>
    </>
  );
}

export default App;
