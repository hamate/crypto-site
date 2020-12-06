import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../actions/sessionAction';
import { setUserAsyncAction } from '../actions/userActions';
import Header from '../components/Header/Header';

function LoggedInMain() {
  const dispatch = useDispatch();

  function loggingOut() {
    dispatch(logoutAction());
    localStorage.removeItem('token');
  }

  return (
    <div>
      <Header />
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
