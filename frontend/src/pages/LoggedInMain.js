import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import CoinDetails from '../components/CoinDetails/CoinDetails';
import CoinSummary from '../components/CoinSummary/CoinSummary';
import './styles/loggedInMain.css';
import CoinNews from '../components/CoinNews/CoinNews';

function LoggedInMain() {
  return (
    <div>
      <Header />
      <div className="main-frontpage">
        <div className="main-side main-side-panel-left"></div>
        <div className="main-container">
          <div className="content-container">
            <CoinSummary />
            <Switch>
              <Route exact path={'/coins/details'} component={CoinSummary} />
              <Route exact path={'/coins/details'} component={CoinDetails} />
            </Switch>
          </div>
        </div>
        <div className="main-side main-side-panel-right">
          <CoinNews />
        </div>
      </div>
    </div>
  );
}

export default LoggedInMain;
