import coinDataFetch from '../utilities/coinDataFetch';

export const setWatchListAction = (watchListData) => ({
  type: 'SET_WATCHLIST',
  payload: watchListData,
});

export function setWatchListAsyncAction(coinId) {
  return async (dispatch) => {
    try {
      const coinFetchResult = await coinDataFetch(
        '/coins/markets?' +
          new URLSearchParams({
            vs_currency: 'usd',
            ids: coinId,
          })
      );
      return dispatch(setWatchListAction(coinFetchResult));
    } catch {
      // return dispatch(setCoinFetchError('Can\'t load coins. Please refresh the page!'));
    }
  };
}