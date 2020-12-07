import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import CoinDetails from '../components/CoinDetails/CoinDetails'
import CoinSummary from '../components/CoinSummary/CoinSummary';
import './styles/loggedInMain.css';

function LoggedInMain() {

  return (
    <div >
    <Header />
      <div className="main-container">
        This is the main-container
        <div className="content-container">
          This is the content-container
          <CoinSummary />
          <Switch>
            <Route exact path={'/coins/details'} component={CoinSummary} />
            <Route exact path={'/coins/details'} component={CoinDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default LoggedInMain;
