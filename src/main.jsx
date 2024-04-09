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
import Register from './pages/register/Register';
import AuthProvider from './auth/AuthProvider';
import PrivateRoute from './private/PrivateRoute';
import Bookmark from './pages/bookmark/Bookmark';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/detail/:id',
        element: <PrivateRoute><DetailCard></DetailCard></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/bookmark',
        element: <PrivateRoute><Bookmark></Bookmark></PrivateRoute>
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
