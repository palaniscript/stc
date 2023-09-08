import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/employees" className={(navData) => (navData.isActive ? "active" : 'none')}>Employees</NavLink>
        </li>
        <li>
          <NavLink to="/students" className={(navData) => (navData.isActive ? "active" : 'none')}>Students</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
