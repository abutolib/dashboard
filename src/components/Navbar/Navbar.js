import './Navbar.css'
import Logo from '../../assets/images/logo.svg'
import Logo2 from '../../assets/images/logo2.svg'
import { NavbarItem } from './NavbarItem/NavbarItem'

export const Navbar = () => {


  return (
    <nav className='navbar'>
      <div className='navbar-header'>
        <a className='navbar-header__link' href='#'>
          <img src={Logo} />
          <img src={Logo2} />
        </a>
      </div>

      <nav className='navbar__links'>
        <ul className='navbar__list'>
          <NavbarItem />
        </ul>
      </nav>

    </nav>
  )
}