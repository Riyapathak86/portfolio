
import { createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Experience from "./Education";
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
        path: "education",
        element: <Education />,
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



