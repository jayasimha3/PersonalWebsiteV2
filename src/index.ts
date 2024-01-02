// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './xApp';
// import Main from './main.jsx'
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { render } from 'react-dom';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // use react-router-dom for multiple webpages
// render((
//   <BrowserRouter>
//     <Main />
//   </BrowserRouter>
// ), document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// External Dependencies
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

// Internal Dependencies
import Root from './routes/root.tsx';
import { EmploymentBody } from './employment/Employment.tsx';
import { ProjectsBody } from './projects/Projects.tsx';
import { ExtracurricularBody } from './extracurricular/Extracurricular.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/employment",
    element: <EmploymentBody />
  },
  {
    path: "/projects",
    element: <ProjectsBody />
  },
  {
    path: "/extracurricular",
    element: <ExtracurricularBody />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);