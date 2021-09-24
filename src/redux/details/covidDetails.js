const FILTER_COVID_STATS = 'FILTER_COVID_STATS';

const initialState = [];

export const filterCovidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COVID_STATS:
      return action.payload;
    default:
      return state;
  }
};

export const filterCovidStats = (payload) => ({
  type: FILTER_COVID_STATS,
  payload,
});
