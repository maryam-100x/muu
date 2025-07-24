import React from 'react'
import './Navbar.css'
import { CONTRACT_ADDRESS } from '../contract'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Muu (むーくん)</Link>
      </div>

      <div className="nav-buttons">
        <a
          className="nav-btn"
          href={`https://letsbonk.fun/token/${CONTRACT_ADDRESS}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy $Muu
        </a>
        <a
          className="nav-btn outline"
          href="https://x.com/communities"
          target="_blank"
          rel="noopener noreferrer"
        >
          𝕏 Community
        </a>
      </div>
    </nav>
  )
}
