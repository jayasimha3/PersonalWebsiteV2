import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

// Internal Dependencies
import Root from './routes/root';
import ErrorPage from './routes/error';
import { EmploymentBody } from './employment/Employment';
import { ProjectsBody } from './projects/Projects';
import { ExtracurricularBody } from './extracurricular/Extracurricular';

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Root />,
      children: [
        // { index: true, element: <EmploymentBody /> },
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
    {
      path: "/extracurricular",
      element: <ExtracurricularBody />,
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);

  return (
    <div>
       {element}
     </div>
  );
}

// -----------------------------------------
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: "<Root />",
//     errorElement: "<ErrorPage />",
//   },
//   {
//     path: "/employment",
//     element: "<EmploymentBody />"
//   },
//   {
//     path: "/projects",
//     element: "<ProjectsBody />"
//   },
//   {
//     path: "/extracurricular",
//     element: "<ExtracurricularBody />"
//   }
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );