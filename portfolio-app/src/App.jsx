import "./App.css";
import About from "./component/about/About";
import { Home } from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Projects from "./component/projects/Projects";
import Skill from "./component/skills/Skill";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
    </>
  );
}

export default App;
