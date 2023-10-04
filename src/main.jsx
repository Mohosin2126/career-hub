import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import AppliedJobs from './Pages/AppliedJobs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
       path:"/",
       element:<Home></Home>
        
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>
         
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
