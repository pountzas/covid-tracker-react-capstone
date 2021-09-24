import { enableFetchMocks } from 'jest-fetch-mock';
import narrativaAPI from '../utils/api/api';

beforeEach(() => {
  fetch.resetMocks();
});

enableFetchMocks();
describe('App runs correctly', () => {
  it('mocks API', async () => {
    fetch.mockResponseOnce(JSON.stringify({ Mock: 'API Mock' }));
    const resp = await narrativaAPI.getStatsByDate();
    expect(resp).toEqual({ Mock: 'API Mock' });
  });
});
