import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

function ErrPage({to}) {
    const error = useRouteError();
  return (
    <div>
        <h1>{error.statusText}</h1>
        <NavLink to={to}>Go Home</NavLink>
    </div>
  )
}

export default ErrPage