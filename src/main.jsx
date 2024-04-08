import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './pages/layout/MainLayout';
import Home from './pages/home/Home';
import DetailCard from './pages/details/DetailCard';
import Login from './pages/login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/detail/:id',
        element: <DetailCard></DetailCard>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
