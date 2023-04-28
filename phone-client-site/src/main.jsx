import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './assets/components/Home/Home';
import Main from './assets/components/Main/Main'
import Phones from './assets/components/Phones/Phones'
// import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/Phones",
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:5000/phones')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
