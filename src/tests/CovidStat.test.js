import { getCovidStatReducer, getCovidStatAction } from '../redux/homeData/covidhome';

describe('Covid Stats Reducer', () => {
  const initialState = [];

  test('should return empty object', () => {
    expect(getCovidStatReducer(initialState, [])).toEqual([]);
  });

  test('should return empty object', () => {
    expect(getCovidStatReducer(initialState, [])).not.toEqual(['Nigeria']);
  });

  test('should return an object with one value', () => {
    expect(getCovidStatReducer(initialState, getCovidStatAction(['Nigeria']))).toEqual(['Nigeria']);
  });

  test('should return an object with one value', () => {
    expect(getCovidStatReducer(initialState, getCovidStatAction(['Nigeria']))).not.toEqual(['Nigeria', 'Uganda']);
  });

  test('should return an object with two values', () => {
    expect(getCovidStatReducer(initialState, getCovidStatAction(['NIgeria', 'Uganda']))).toEqual(['NIgeria', 'Uganda']);
  });

  test('should return an object with two values', () => {
    expect(getCovidStatReducer(initialState, getCovidStatAction(['Nigeria', 'Uganda']))).not.toEqual(['Nigeria']);
  });
});
