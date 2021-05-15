import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
        </Link> */}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-lg fa-times' : 'fas fa-lg fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Categories <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resources
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/team'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              The Team
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/submit'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Submit
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/join-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Join Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contribute'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contribute
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>            
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
