import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BookData from "../assets/components/BookData";

const router = createBrowserRouter([

    {
    path:"/",
    element: <Homepage/>,
    
    children: [
        {
          path: "/books",
          element: <p>BookData BookData</p>,
        },
        {
          path: "*",
          element: <p>Homepage NotFound</p>,
        },
      ],
    }
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );


    
    
   