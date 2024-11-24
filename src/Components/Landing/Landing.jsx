import React, { useState } from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import home_pic from '../../Assets/Images/header-img-removebg-preview.png';
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

function Landing() {
  const navigate = useNavigate();

  // Function to navigate to the LoginSignup component with the login state
  const handleLoginClick = () => {
    navigate('/walletLogin', { state: { action: 'login' } });
  };
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
  };

  return (
    <>
      <div className='home'>
        <header>
          <nav>
            <h1 className='logo'><RiMenu3Fill className='iconic'/><span>SWIFT</span>PAY</h1>
            <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false); }}>
              <div className='menu' style={getMenuStyles(menuOpened)}>
                <ul>
                  <li className='links'><a href='#home'>Home<span></span></a></li>
                  <li className='links'><a href='#about'>About <span></span></a></li>
                  <li className='links'><a href='/contact'>Contact Us<span></span></a></li>
                  <li className='links'><a href='#' onClick={handleLoginClick}>Login<span></span></a></li>
                  <button id='header-btn' onClick={() => navigate('/walletLogin')}>SignUp</button>
                </ul>
              </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
              <BiMenuAltRight size={30} />
            </div>
          </nav>
        </header>
        <div className='content' id='home'>
          <div className='landing-container'>
            <h1>Secure, Swift And <br />Seamless Payments.</h1>
            <button className='content-button' onClick={() => navigate('/walletLogin')}>Get Started</button>
          </div>
          <img src={home_pic} alt="home pic" className='feature_img' />
        </div>
      </div>
    </>
  );
}

export default Landing;
