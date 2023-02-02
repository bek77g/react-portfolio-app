import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <Link to='/' className='logo'>
            <strong>Freelancer</strong> portfolio
          </Link>

          <button className='dark-mode-btn'>
            <img
              //   src='./img/icons/sun.svg'
              alt='Light mode'
              className='dark-mode-btn__icon'
            />
            <img
              //   src='./img/icons/moon.svg'
              alt='Dark mode'
              className='dark-mode-btn__icon'
            />
          </button>

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <a href='/' className='nav-list__link nav-list__link--active'>
                Projects
              </a>
            </li>
            <li className='nav-list__item'>
              <a href='/skills' className='nav-list__link'>
                Skills
              </a>
            </li>
            <li className='nav-list__item'>
              <a href='./contacts' className='nav-list__link'>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
