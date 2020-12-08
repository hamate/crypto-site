const initialState = {
  watchList: 'bitcoin,ethereum,ripple',
};

const watchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WATCHLIST':
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};

export default watchListReducer;
