import vkIcon from '../assets/icons/vk.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import githubIcon from '../assets/icons/gitHub.svg';
import linkedInIcon from '../assets/icons/linkedIn.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            <li className='social__item'>
              <a href='#!'>
                <img src={vkIcon} alt='Link' />
              </a>
            </li>
            <li className='social__item'>
              <a href='#!'>
                <img src={instagramIcon} alt='Link' />
              </a>
            </li>
            <li className='social__item'>
              <a href='#!'>
                <img src={twitterIcon} alt='Link' />
              </a>
            </li>
            <li className='social__item'>
              <a href='#!'>
                <img src={githubIcon} alt='Link' />
              </a>
            </li>
            <li className='social__item'>
              <a href='#!'>
                <img src={linkedInIcon} alt='Link' />
              </a>
            </li>
          </ul>
          <div className='copyright'>
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
