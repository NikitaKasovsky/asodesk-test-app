import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavbarComponent: React.FC = () => {
  const styles = {
    div: {
      cursor: 'pointer'
    }
  }

  return (
    <nav>
      <div className="nav-wrapper indigo">
        <div className="brand-logo right" style={styles.div}>
          <NavLink to="/">Test app to ASOdesk</NavLink>
        </div>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/stats">Таблица</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
