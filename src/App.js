import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Experiance from "./components/Experiance";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <Experiance />
      <Projects />
      <Skills />
   
    </div>
  );
}

export default App;
