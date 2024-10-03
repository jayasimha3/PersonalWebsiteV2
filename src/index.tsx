import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./common/Navbar";

import "./index.css";
import App from "./App";

import { Tooltip } from "bootstrap";

document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  // eslint-disable-next-line
  const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
      <div className="bg-dark d-flex flex-column h-100" data-bs-theme="dark">
        <Navbar></Navbar>
        <App />
        <div className="flex-grow-1"></div>
        <Footer></Footer>
      </div>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found.");
}