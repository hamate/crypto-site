import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import coinDataFetch from '../../utilities/coinDataFetch';
import { setWatchListAsyncAction } from '../../actions/watchListAction';
import Coin from './Coin';

function CoinList() {
  const [coins, setCoins] = useState(['bitcoin', 'ethereum', 'ripple']);
  const dispatch = useDispatch();
  const coinsResult = useSelector((state) => state.watchList.coins);

  useEffect(() => {
    dispatch(setWatchListAsyncAction(coins.join(',')));
  }, []);
  console.log(coinsResult);

  return (
    <div className="coin-list container">
      {coinsResult !== undefined ? (
        <ul className="coinlist">
          {coinsResult.map((coin) => (
            <Coin key={coin.id} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CoinList;
