import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderMain from './HeaderMain';
import './Header.css';
import { logoutAction } from '../../actions/sessionAction';

function Header({ isLoggedIn, loggingOut }) {
  const dispatch = useDispatch();

  function loggingOut() {
    dispatch(logoutAction());
    localStorage.removeItem('token');
  }

  const loggedInLinks = [
    { text: 'Logout', path: '/login' },
  ];
  const loggedOutLinks = [
    { text: 'Login', path: '/login' },
    { text: 'Register', path: '/register' },
  ];
  let currentStatus = loggedOutLinks;

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  if (isLoggedIn !== false) {
    currentStatus = loggedInLinks;
  }
  return (
    <div className="header" key="header">
      <HeaderMain isLoggedIn={isLoggedIn} />
      <div>
        {currentStatus.map((item) => (
          <Link
            key={item.text}
            to={item.path}
            style={linkStyle}
            className="link"
            onClick={() => {
              if (item.text === 'Logout') {
                loggingOut();
              }
            }}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

Header.propTypes = {
  loggingOut: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

export default Header;
