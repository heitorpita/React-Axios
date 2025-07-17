import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <Link to={`/new`} className='new-btn'>Novo Post</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
