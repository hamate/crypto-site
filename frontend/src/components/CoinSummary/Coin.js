import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Coin.css';
import { removeFromWatchListAction } from '../../actions/watchListAction';

function Coin({ coin }) {
  const dispatch = useDispatch();

  function deleteCoin(coinId) {
    dispatch(removeFromWatchListAction(coinId));
  }

  return (
    <div className="coin-container">
      <Link className="coin-links" to="/coindetails">
        <li className="coinlist-item list-group-item list-group-item-action text-dark">
          <img
            className="coinlist-image"
            src={coin.image}
            alt="image of the coin"
          />
          <span className="coinlist-name text-decoration-none">
            {coin.name}
          </span>
          <span className="coinlist-price text-decoration-none">
            ${coin.current_price}
          </span>
          <span
            className={
              coin.price_change_percentage_24h < 0
                ? 'coinlist-percent text-danger mr-2'
                : 'coinlist-percent text-success mr-2'
            }
          >
            {coin.price_change_percentage_24h < 0 ? (
              <i className="coinlist-percent fas fa-sort-down align-middle mr-1"></i>
            ) : (
              <i className="coinlist-percent fas fa-sort-up align-middle mr-1"></i>
            )}{' '}
            {coin.price_change_percentage_24h}
          </span>
          <svg
            onClick={(event) => {
              event.preventDefault();
              deleteCoin(coin.id);
            }}
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="delete-icon bi bi-trash"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </li>
      </Link>
    </div>
  );
}

export default Coin;
