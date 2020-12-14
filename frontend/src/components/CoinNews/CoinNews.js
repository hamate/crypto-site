import React, { useEffect, useState } from 'react';
import CryptoNewsApi from 'crypto-news-api';
import config from '../../config';
import './CoinNews.css';
import NewsCards from './NewsCards';

function CoinNews() {
  const [newsData, setNewsData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(3);

  const Api = new CryptoNewsApi('aa501378ef421c5dc32bdcb91b01ac06');
  Api.enableSentiment();

  useEffect(() => {
    async function getNewsData() {
      const newsResult = await Api.getTopNews();
      setNewsData(newsResult);
    }
    getNewsData();
  }, []);

  function expandNews() {
    setItemsToShow(itemsToShow + 3);
  }

  return (
    <div>
      {newsData.length > 0 ? (
        newsData.splice(0, itemsToShow).map((news) => (
          <div className="news-card">
            <NewsCards key={news._id} newsData={news} />
          </div>
        ))
      ) : (
        <span>Loading...</span>
      )}
      <button
        className="btn btn-primary show-more"
        type="button"
        onClick={() => expandNews()}
      >
        Show more
      </button>
    </div>
  );
}

export default CoinNews;
