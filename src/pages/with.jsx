import React from 'react'
import Navbar from '../components/with/navbar'
import PrivateRoutes from '../routes/privateRoutes'
import PublicRoutes from '../routes/publicRoutes';

function With() {
    const isAuth = false;
    return (
        <>

            {
                isAuth ?
                    <header>
                        <Navbar />
                        <PrivateRoutes />
                    </header>
                    :
                    <header>
                        <Navbar />
                        <PublicRoutes />
                    </header>

            }
        </>
    )
}

export default With