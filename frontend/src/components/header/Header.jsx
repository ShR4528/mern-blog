import React from 'react';
import { nav } from '../../assets/data/data';
import { Link } from 'react-router-dom';
import { User } from './User';

import './Header.css';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width='100px' />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
