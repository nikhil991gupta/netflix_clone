import React from "react";
import Log_in from "./Log_in";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Bo = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Log_in/>
    },
    {
      path: "browse",
      element: <Browser></Browser>
    },
  ]);
  return (
    <div>
      <RouterProvider router={approuter}></RouterProvider>
    </div>
  );
};

export default Bo;
