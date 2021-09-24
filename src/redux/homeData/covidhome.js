import narrativaAPI from '../../utils/api/api';

const GET_COVID_STAT = 'GET_COVID_STAT';

const initialState = [];

export const getCovidStatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_STAT:
      return action.payload.filter((country) => country[1].today_new_confirmed !== 0);
    default:
      return state;
  }
};

export const getCovidStatAction = (payload) => ({
  type: GET_COVID_STAT,
  payload,
});

export const getCovidStat = () => (dispatch) => {
  narrativaAPI.getStatsByDate().then((res) => {
    dispatch(getCovidStatAction(Object.entries(res.dates[res.total.date].countries)));
  });
};
