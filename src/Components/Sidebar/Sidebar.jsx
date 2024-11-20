import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';

import { CiUser } from 'react-icons/ci';
import { FaQuestion, FaWallet } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';
import { AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { username } from '../../Apicalls';
import user from '../../Assets/Images/user.png';

import {
  isActive,
  toggleSidebar,
  config,
  handleResize
} from '../../Services';

const { overview, wallet, history, account, support } = config.routeconfig;

function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    handleResize(setSidebarActive);
    window.addEventListener('resize', () => handleResize(setSidebarActive));

    return () => {
      window.removeEventListener('resize', () => handleResize(setSidebarActive));
    };
  }, []);

  const [data, setData] = useState([]);

  const usercall = async () => {
    try {
      var res = await username(localStorage.getItem('userid'));
      setData(res);
      localStorage.setItem("username", res.message);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    usercall();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); 
  };

  return (
    <>
      <AiOutlineMenu
        className={`sidebar-toggle ${sidebarActive ? '' : 'active'}`}
        onClick={() => toggleSidebar(sidebarRef, setSidebarActive)}
      />

      <div className={`sidebar ${sidebarActive ? 'active' : ''}`} ref={sidebarRef}>
        <div className="sidebarheader">
          <img className="logo-user" src={user} alt="User" />
          <div className="user-welcome">
            <p>Welcome</p>
            <h2>{data.message}</h2>
          </div>
        </div>

        <div className="sidebarmain">
          <a href={overview} style={{ backgroundColor: isActive(overview) ? '#487bd2' : ''}}>
            <h1>Overview</h1>
          </a>

          <a href={wallet} style={{ backgroundColor: isActive(wallet) ? '#487bd2' : ''}}>
            <div className='iconmain'>
              <FaWallet className='sidebar-icon' />
              <h1>Wallet</h1>
            </div>
          </a>

          <a href={history} style={{ backgroundColor: isActive(history) ? '#487bd2' : ''}}>
            <div className='iconmain'>
              <MdHistory className='sidebar-icon' />
              <h1>History</h1>
            </div>
          </a>

          <a href={account} style={{ backgroundColor: isActive(account) ? '#487bd2' : ''}}>
            <div className='iconmain'>
              <CiUser className='sidebar-icon' />
              <h1>Account</h1>
            </div>
          </a>

          <a href={support} style={{ backgroundColor: isActive(support) ? '#487bd2' : '' }}>
            <div className='iconmain'>
              <FaQuestion className='sidebar-icon' />
              <h1>Support</h1>
            </div>
          </a>

          <a onClick={handleLogout} id="quit">
            <div className='iconmain'>
              <AiOutlineLogout className='sidebar-icon' />
              <h1>Quit</h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
