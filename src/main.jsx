import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from "./layouts/mainLayout";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import City from "./pages/City";
import Activities from "./pages/activities";
import Activity from "./pages/activities/id";
import Attractions from "./pages/attractions";
import Attraction from "./pages/attractions/id";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
  import './index.scss'

// pagine statiche 

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<Activity />} />
      <Route path="attractions" element={<Attractions />} />
      <Route path="attractions/:id" element={<Attraction />} />
      <Route path="city" element={<City />} />
    </Route>
      
    
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
