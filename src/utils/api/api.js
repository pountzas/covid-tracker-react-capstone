const baseurl = 'https://api.covid19tracking.narrativa.com/api';

const covidStatsAPI = {
  async getStatsByDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const getFullDate = `${year}-${month}-${day}`;

    const rawResponse = await fetch(`${baseurl}/${getFullDate}`);
    const data = await rawResponse.json();

    return data;
  },
};

export default covidStatsAPI;
