import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
const Navbar = () => {
  return (
    <div id="header">
      <div className="clearfix">
        <div className="logo">
          <NavLink to={'/'} className="text-white">
            <img src={''} alt="LOGO" className="h-[52px] w-[362px]" />
          </NavLink>
        </div>
        <ul className="navigation">
          <li className="active">
            <NavLink to={'/'} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/services'}>Services</NavLink>
          </li>
          <li>
            <NavLink to={'/blogs'}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to={'/contact-us'}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
