import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import './vanila css/Vanila.css'
import Loader from './Loader';
import DymaicData from './DymaicData';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/loader",
        element: <Loader></Loader>  ,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "/data",
        element: <DymaicData></DymaicData>   ,
        
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
