import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
