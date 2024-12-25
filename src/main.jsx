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
import Form from './form file/Form';
import ContextApi from './context api/ContextApi';



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
        path: "/loader/:id",
        element: <DymaicData></DymaicData>   ,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

      },
      {
        path: "/form",
        element: <Form></Form>  ,
      },
      {
        path: "/context",
        element: <ContextApi></ContextApi>  ,
      },
     
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
