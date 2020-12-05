import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../actions/sessionAction';

function LoggedInMain() {
  const dispatch = useDispatch();

  function loggingOut() {
    dispatch(logoutAction());
    localStorage.removeItem('token');
  }

  return (
    <div>
      <Link
        to="/login"
        className="logout-link"
        onClick={() => {
          loggingOut();
        }}
      >
        Logout
      </Link>
    </div>
  );
}

export default LoggedInMain;
