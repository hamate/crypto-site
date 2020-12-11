import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWatchListAction, setWatchListAsyncAction } from '../../actions/watchListAction';
import coinDataFetch from '../../utilities/coinDataFetch';

function AddCoin() {
  const [availableCoins, setAvailableCoins] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCoinList() {
      const coinFetchResult = await coinDataFetch(
        '/coins/markets?' +
          new URLSearchParams({
            vs_currency: 'usd',
            ids: [],
            per_page: 15,
          })
      );
      setAvailableCoins(coinFetchResult.map((coin) => coin.id));
    }
    getCoinList();
  }, []);
  console.log(availableCoins);
  
  const handleClick = (coin) => {
    dispatch(setWatchListAction(coin));
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? 'dropdown-menu show' : 'dropdown-menu'}>
        {availableCoins.map((selectCoin) => {
          return (
            <a
              key={selectCoin}
              onClick={() => handleClick(selectCoin)}
              href="#"
              className="dropdown-item"
            >
              {selectCoin}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default AddCoin;
