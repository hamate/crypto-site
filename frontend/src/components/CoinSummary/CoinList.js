import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import coinDataFetch from '../../utilities/coinDataFetch';
import { setWatchListAction } from '../../actions/watchListAction';
import Coin from './Coin';

function CoinList() {
  const [coins, setCoins] = useState(['bitcoin', 'ethereum', 'ripple']);
  const [coinsData, setCoinsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWatchListAction(coins.join(',')));
    async function fetchCoinAPI() {
      const coinFetch = await coinDataFetch(
        '/coins/markets?' +
          new URLSearchParams({
            vs_currency: 'usd',
            ids: coins,
          })
      );
      setCoinsData(coinFetch);
    }
    fetchCoinAPI();
  }, []);
  console.log(coinsData);

  return (
    <div>
      <ul className="coinlist">
        {coinsData.map((coin) => (
          <Coin key={coin.id} />
        ))}
      </ul>
    </div>
  );
}

export default CoinList;
