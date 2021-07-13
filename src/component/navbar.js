import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar nav-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Contact App</Link>
        </nav>
    )
}

export default Navbar
