import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from '../components/about';
import Home from '../components/home';
import Navbar from '../components/just/navbar';
import Main from '../components/main';
import ErrPage from '../components/just/errPage';

function Just() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            errorElement: <ErrPage to="/" />,
            children: [
                {
                    index: true,
                    element: <Main />
                }
            ]
        },
        {
            path: "/about",
            element: <Navbar />,
            children: [
                {
                    index: true,
                    element: <About />
                }
            ]
        },
        {
            path: "/home",
            element: <Navbar />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ]);
    return (
        <>

            <RouterProvider router={router} />
        </>
    )
}

export default Just