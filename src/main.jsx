import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import AppliedJobs from './Pages/AppliedJobs';
import Jobs from './Pages/Jobs';
import Blogs from './Pages/Blogs';
import Statistics from './Pages/Statistics';
import ErrorPage from './Pages/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
       path:"/",
       element:<Home></Home>
        
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>
         
       },
       {
        path:"/jobs",
        element:<Jobs></Jobs>
         
       },
       {
        path:"/blogs",
        element:<Blogs></Blogs>
         
       },
       {
        path:"/statistics",
        element:<Statistics></Statistics>
         
       },

    ],
  },
]);

// Create a root and render the JSX inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
