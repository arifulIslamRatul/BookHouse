import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import "../../src/index.css"
import BookData from "../assets/components/BookData";
import BookDetails from "../assets/components/BookDetails";
import About from "../assets/components/About";
import  "../../books.json";

const router = createBrowserRouter([

    {
    path:"/",
    element: <Homepage></Homepage>,
    
    children: [
      
        {
          path: "/about",
          element:<About></About>,
        },

        {
          path: "/book/:bookId",
          loader: ({params}) =>fetch(`/books.json/${params.bookId}`),
          element:<BookDetails></BookDetails>,
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


    
    
   