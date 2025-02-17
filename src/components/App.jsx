
import Experience from "./Education";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Project from "./Project";
import { NavLink, Outlet } from "react-router-dom";
import About from "./About";
function App() {
return (
    <>
<Navbar />
<Outlet />
<Experience/>

<Skills/>
<Project/>
    </>
  );
}

export default App;
