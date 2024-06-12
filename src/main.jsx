import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import AboutUse from './page/about-use/AboutUse.jsx';
import Layout from './components/layout/Layout.jsx';
import CardDetail from './page/card-Detail/CardDetail.jsx';
import Register from './page/auth/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <App/>
      },
      {
        path: "AboutUse",
        element: <AboutUse/>
      },
      {
        path: "card-Detail",
        element: <CardDetail/>
      },
    ]
  },
  {
    path: "/Register",
    element: <Register/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
