import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"skills",
        element:<Skills />
      },
      {
        path:'projects',
        element:<Projects />
      },
      {
        path:"/project/:projectId",
        element:<ProjectDetails />
      }
      
    ],
  },
]);

export default router;
