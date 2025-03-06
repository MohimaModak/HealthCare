import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import About from "./assets/Component/About/About";
import Services from "./assets/Component/Services/Services";
import Insurance from "./assets/Component/Insurance/Insurance";
import Testimonials from "./assets/Component/Testimonials/Testimonials";
import Contact from "./assets/Component/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/Insurance",
        element: <Insurance></Insurance>,
      },
      {
        path: "/Testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
