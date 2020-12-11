import React from 'react';
import AddCoin from './AddCoin';
import CoinList from './CoinList';

function CoinSummary() {


  return (
    <div className="coinsummary-container">
      <p className="coinsummary-title">CryptoCurrency Actual Prices</p>
      <div className="coinsummary-table">
      <AddCoin />
      <CoinList />
      </div>
    </div>
  )
}

export default CoinSummary;
