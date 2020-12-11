import coinDataFetch from '../utilities/coinDataFetch';

export const setWatchListAction = (watchList) => ({
  type: 'SET_WATCHLIST',
  payload: watchList,
});

export const removeFromWatchListAction = (watchList) => ({
  type: 'REMOVE_FROM_WATCHLIST',
  payload: watchList,
});

export const setCoinsDataAction = (coinsData) => ({
  type: 'SET_COINS_DATA',
  payload: coinsData,
});

export function setCoinDataAsyncAction(coinId) {
  return async (dispatch) => {
    try {
      const coinFetchResult = await coinDataFetch(
        '/coins/markets?' +
          new URLSearchParams({
            vs_currency: 'usd',
            ids: coinId,
          })
      );
      return dispatch(setCoinsDataAction(coinFetchResult));
    } catch {
      // return dispatch(setCoinFetchError('Can\'t load coins. Please refresh the page!'));
    }
  };
}