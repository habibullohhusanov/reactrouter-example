import React from 'react'
import Navbar from '../components/without/navbar'
import Home from '../components/home';
import About from '../components/about';
import Main from '../components/main';

function Without() {
    let component = <Main />
    let route = window.location.pathname;
    switch (route) {
        case "/" :
            component = <Main />
            break
        case "/home" :
            component = <Home />
            break
        case "/about" :
            component = <About />
            break
    }
    return (
        <>
            <Navbar />
            {component}
        </>
    )
}

export default Without