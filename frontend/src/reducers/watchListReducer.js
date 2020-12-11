const initialState = {
  watchList: 'bitcoin,ethereum,ripple',
};

const watchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WATCHLIST':
      return {
        ...state,
        watchList: state.watchList.concat(',', action.payload),
      };
      case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchList: state.watchList.split(',').filter(item => item !== action.payload).join(','),
      };
      case 'SET_COINS_DATA':
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};

export default watchListReducer;
