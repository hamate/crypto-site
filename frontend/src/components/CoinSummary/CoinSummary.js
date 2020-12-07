import React, { useEffect, useState } from 'react';
import AddCoin from './AddCoin';
import CoinList from './CoinList';
import coinDataFetch from '../../utilities/coinDataFetch';

function CoinSummary() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    coinDataFetch('/coins/markets?' + new URLSearchParams({
      vs_currency: "usd",
      ids: "bitcoin,ethereum",
    }));
  }, [])

  return (
    <div>
      <AddCoin />
      <CoinList />
    </div>
  )
}

export default CoinSummary;
