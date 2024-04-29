import React from 'react';
import "./nav.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <BnLink to="/">Main</BnLink>
            <BnLink to="/home">Home</BnLink>
            <BnLink to="/about">About</BnLink>
        </ul>
    </nav>
  )
}

function BnLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" :""}><Link to={to} {...props}>{children}</Link></li>
    )
}

export default Navbar