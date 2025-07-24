import React from 'react'
import './Navbar.css'
import { CONTRACT_ADDRESS } from '../contract'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="logo">Muu (むーくん)</a>
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
          href="https://x.com/i/communities/1948510937373442125"
          target="_blank"
          rel="noopener noreferrer"
        >
          𝕏 Community
        </a>
      </div>
    </nav>
  )
}
