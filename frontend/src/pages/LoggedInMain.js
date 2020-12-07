import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';

function LoggedInMain() {

  return (
    <div>
      <Header />
    </div>
  );
}

export default LoggedInMain;
