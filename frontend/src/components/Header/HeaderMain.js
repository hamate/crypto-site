import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

function HeaderMain({ isLoggedIn }) {
  const userName = useSelector(state => state.user.username )
  return (
    <Link className="headerMain" to="/main" style={linkStyle}>
      Hello { userName }
    </Link>
  );
}

HeaderMain.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default HeaderMain;
