import React from 'react';
import { Link } from 'react-router-dom';
import './Coin.css';

function Coin({ coin }) {
  return (
    <div className="coin-container">
      <Link to="/coindetails">
        <li className="coinlist-item">
          <img
            className="coinlist-image"
            src={coin.image}
            alt="image of the coin"
          />
          <span className="coinlist-price">{coin.name}</span>
          <span className="coinlist-price">${coin.current_price}</span>
          <span className="coinlist-percent">
            <i className="coinlist-arrow"></i>
            {coin.price_change_percentage_24h}
          </span>
          <i className="coinlist-delete-icon"></i>
        </li>
      </Link>
    </div>
  );
}

export default Coin;
