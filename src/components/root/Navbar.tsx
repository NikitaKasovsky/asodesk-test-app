import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavbarComponent: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo">
        <div className="brand-logo right">Test app to ASOdesk</div>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/">Таблица</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
