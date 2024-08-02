import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/contact/Contact';
import Users from './component/users/Users';
import Pasts from './component/posts/Pasts';
import PastDetails from './component/postDetails/PastDetails';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>

      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Pasts></Pasts>
      },
      {
        path:'posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users ${params.postId}`),
        element:<PastDetails></PastDetails>
      },
      {
        path:'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
     
    ]
  }
])
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
