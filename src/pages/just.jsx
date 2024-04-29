import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from '../components/main';

function Just() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: Main,
            
        }
    ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Just