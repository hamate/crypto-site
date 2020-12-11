import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCoinDataAsyncAction } from '../../actions/watchListAction';
import Coin from './Coin';
import './CoinList.css';

function CoinList() {
  const dispatch = useDispatch();
  const coinsResult = useSelector((state) => state.watchList.coins);
  const watchListResult = useSelector((state) => state.watchList.watchList);

  useEffect(() => {
    dispatch(setCoinDataAsyncAction(watchListResult));
  }, [watchListResult]);

  const renderCoins = () => {
    return coinsResult !== undefined ? (
      <ul className="coinlist">
        {coinsResult.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </ul>
    ) : (
      <p>Loading...</p>
    );
  };

  return <div className="coin-list container">{renderCoins()}</div>;
}

export default CoinList;
