import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

// Internal Dependencies
import Root from './routes/root';
import ErrorPage from './routes/error';
import { EmploymentBody } from './employment/Employment';
import { ProjectsBody } from './projects/Projects';
import { Navbar, Footer } from './common/Navbar';

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "*", element: <ErrorPage /> },
      ],
    },
    {
      path: "/employment",
      element: <EmploymentBody />,
    },
    {
      path: "/projects",
      element: <ProjectsBody />,
    },
  ];

  let element = useRoutes(routes);

  return (
    <>
    {/* <Navbar></Navbar> */}
       {element}
     {/* <Footer></Footer> */}
     </>
  );
}