import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './Details.jsx';
import Login from './Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import AuthProvider from './AuthProvider.jsx';
import LayOut from './LayOut.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details /></PrivateRoute>, 
        loader: ({params}) => fetch(`https://travel-guru-server-red-xi.vercel.app/data/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

