import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getCovidStatReducer } from './homeData/covidhome';
import { filterByLocationReducer } from './filter/filterLocation';
import { filterCovidReducer } from './details/covidDetails';

const allReducer = combineReducers({
  covidData: getCovidStatReducer,
  filteredData: filterCovidReducer,
  countries: filterByLocationReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
