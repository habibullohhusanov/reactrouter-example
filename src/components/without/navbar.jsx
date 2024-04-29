import React from 'react';
import "./nav.css"

function Navbar() {
  return (
    <nav>
        <ul>
            <Link href="/">Main</Link>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
        </ul>
    </nav>
  )
}

function Link({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" :""}><a href={href}>{children}</a></li>
    )
}

export default Navbar