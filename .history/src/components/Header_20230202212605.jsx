import React from 'react';

function Header() {
  return (
    <header className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <a href='./index.html' className='logo'>
            <strong>Freelancer</strong> portfolio
          </a>

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
              <a
                href='./index.html'
                className='nav-list__link nav-list__link--active'>
                Projects
              </a>
            </li>
            <li className='nav-list__item'>
              <a href='./skills.html' className='nav-list__link'>
                Skills
              </a>
            </li>
            <li className='nav-list__item'>
              <a href='./contacts.html' className='nav-list__link'>
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
