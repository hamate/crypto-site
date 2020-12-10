import React from 'react';
import AddCoin from './AddCoin';
import CoinList from './CoinList';

function CoinSummary() {


  return (
    <div className="coinsummary-container">
      <AddCoin />
      <CoinList />
    </div>
  )
}

export default CoinSummary;
