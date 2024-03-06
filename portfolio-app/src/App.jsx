import "./App.css";
import About from "./component/about/About";
import { Home } from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </>
  );
}

export default App;
