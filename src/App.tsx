import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import ScreenLoader from "./components/ScreenLoader";
import routes from "./constants/routes";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.detail,
    element: <Detail />,
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <ScreenLoader loading={loading}>
        <PuffLoader loading={loading} color="white" size={70} />
      </ScreenLoader>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
