import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./style.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cars from "./pages/Cars.jsx";
import Cardetails from "./pages/Cardetails.jsx";
import HostCarDetails from "./pages/HostCarDetails.jsx";
import Layout from "./layouts/Layout.jsx";
import Host from "./layouts/Host.jsx";
import Income from "./pages/Income.jsx";
import Reviews from "./pages/Reviews.jsx";
import Dashboard from "./pages/Dashboard.jsx";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "cars", element: <Cars /> },
//       { path: "cars/:id", element: <Cardetails /> },
//       {
//         path: "host",
//         element: <Host />,
//         children: [
//           { path: "/", element: <Dashboard /> },
//           { path: "income", element: <Income /> },
//           { path: "reviews", element: <Reviews /> },
//           { path: "cars", element: <Cars /> },
//           { path: "cars/:id", element: <HostCarDetails /> },
//         ],
//       },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/:id" element={<Cardetails />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:id" element={<HostCarDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
