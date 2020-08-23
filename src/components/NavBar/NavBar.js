import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Lobby</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar;