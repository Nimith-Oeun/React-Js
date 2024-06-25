import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import AboutUse from './page/about-use/AboutUse.jsx';
import Layout from './components/layout/Layout.jsx';
import CardDetail from './page/card-Detail/CardDetail.jsx';
import Register from './page/auth/Register.jsx';
import { Provider } from 'react-redux'
import { store } from './Redux/Store.jsx';
import ProductCard from './page/productCard/ProductCard.jsx';
import CartView from './page/cartPage/CartProduct.jsx';

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
      {
        path: "ProductCard",
        element: <ProductCard/>
      },
      {
        path: "/CartProduct",
        element: <CartView/>
      }
    ]
  },
  {
    path: "/Register",
    element: <Register/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
