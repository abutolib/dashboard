import './NavbarItem.css'
import { Link, NavLink } from "react-router-dom"
import { OverviewIcon } from '../Icons'
import { Tickets } from '../Icons'
import { Ideas } from '../Icons'
import { Contacts } from '../Icons'
import { Agents } from '../Icons'
import { Articles } from '../Icons'
import { Settings } from '../Icons'
import { Subscription } from '../Icons'



export const NavbarItem = () => {
  return (
    <>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/overview" >
          <OverviewIcon />Overview
        </NavLink>
      </li>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/tickets" >
          <Tickets />Ticekts
        </NavLink>
      </li>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/ideas" >
          <Ideas />Ideas
        </NavLink>
      </li>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/contacts" >
          <Contacts />Contacts
        </NavLink>
      </li>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/agents" >
          <Agents />Agents
        </NavLink>
      </li>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/articles" >
          <Articles />Articles
        </NavLink>
      </li>
      <div className='line-wrapper'>
        <span className='line'></span>
      </div>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/settings" >
          <Settings />Settings
        </NavLink>
      </li>
      <li className='navbar__item'>
        <NavLink className={({ isActive }) =>
          isActive
            ? "navbar__link navbar__link--active"
            : "navbar__link"
        } to="/subscription">
          <Subscription />Subscription
        </NavLink>
      </li>
    </>
  )
}

//className='navbar__link'