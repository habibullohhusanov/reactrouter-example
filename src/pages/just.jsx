import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from '../components/about';
import Home from '../components/home';
import Navbar from '../components/just/navbar';

function Just() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/home",
            element: <Home />
        }
    ]);
    return (
        <>

            <RouterProvider router={router} />
        </>
    )
}

export default Just