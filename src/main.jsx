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
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import Error from './pages/error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>

    <Toaster />
  </React.StrictMode>,
)
