import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swamiPhoto from '../images/sb3.png';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='#b71c1c red darken-4'>
      <div className='nav-wrapper valign-wrapper'>
        <img
          src={swamiPhoto}
          width='70'
          className='responsive-img'
          alt='swamiPhoto'
        ></img>
        <Link to='/' className='brand-logo center'>
          {title}
        </Link>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Bhajan Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
