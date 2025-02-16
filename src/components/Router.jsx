
import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import App from "./App";
import Skills from "./Skills";
import Project from "./Project"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
   
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "Skillls",
        element: <Skills />,
      },
      {
        path: "Project",
        element: <Project />,
      },
    ],
  },
]);



