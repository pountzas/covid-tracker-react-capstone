import { filterCovidReducer, filterCovidStats } from '../redux/details/covidDetails';

describe(' Filter Covid Stats Reducer', () => {
  const initialState = {};

  test('should return empty object', () => {
    expect(filterCovidReducer(initialState, {})).toEqual({});
  });

  test('should return empty object', () => {
    expect(filterCovidReducer(initialState, {})).not.toEqual({ country: 'Nigeria' });
  });

  test('should return an object with one value', () => {
    expect(filterCovidReducer(initialState, filterCovidStats({ country: 'Nigeria' }))).toEqual({ country: 'Nigeria' });
  });

  test('should return an object with one value', () => {
    expect(filterCovidReducer(initialState, filterCovidStats({ country: 'Nigeria' }))).not.toEqual({ country: 'Nigeria', confirmed: 1000, total: 200 });
  });

  test('should return an object with three values', () => {
    expect(filterCovidReducer(initialState, filterCovidStats({ country: 'Nigeria', confirmed: 1000, total: 90000 }))).toEqual({ country: 'Nigeria', confirmed: 1000, total: 90000 });
  });

  test('should return an object with three values', () => {
    expect(filterCovidReducer(initialState, filterCovidStats({ country: 'Nigeria', confirmed: 900, total: 90000 }))).not.toEqual({ country: 'Nigeria', confirmed: 900, total: 200 });
  });
});
