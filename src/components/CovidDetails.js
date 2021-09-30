import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { filterCovidStats } from '../redux/details/covidDetails';

const CovidDetails = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(useLocation().search);
  const countryName = searchParams.get('country');
  const filteredCountry = useSelector((state) => state.covidData)
    .filter((country) => country[0] === countryName);

  if (filteredCountry.length !== 0) {
    dispatch(filterCovidStats({
      country: filteredCountry[0][1].name,
      today_vs_yesterday: filteredCountry[0][1].today_vs_yesterday_confirmed,
      today_confirmed: filteredCountry[0][1].today_confirmed,
      today_recovered: filteredCountry[0][1].today_recovered,
      today_deaths: filteredCountry[0][1].today_deaths,
      today_open_cases: filteredCountry[0][1].today_open_cases,
      today_new_cases: filteredCountry[0][1].today_new_confirmed,
      today_new_recovered: filteredCountry[0][1].today_new_recovered,
      today_new_deaths: filteredCountry[0][1].today_new_deaths,
      today_new_open_cases: filteredCountry[0][1].today_new_open_cases,
    }));
  }

  const country = useSelector((state) => state.filteredData);

  return (
    <main>
      <div className="details-hero">
        <div className="">
          <h2 className="text-white ps-3 font-xlg text-uppercase mt-3">{countryName}</h2>
        </div>
      </div>
      {
        Object.keys(country).length === 0
          ? <div className="no-result text-center">No Result</div>
          : (
            <div className="details-stat">
              <div className="">
                <p className="font-lg ps-3 mb-2 text-white text-info">{`Today in ${countryName}`}</p>
              </div>
              <div>
                <div className="country-item d-flex justify-content-between">
                  <p className="">{`TODAY${String.fromCharCode(39)}S NEW CONFIRMED`}</p>
                  <p>{country.today_new_cases}</p>
                </div>
                <div className="country-item  d-flex justify-content-between">
                  <p>{`TODAY${String.fromCharCode(39)}S NEW RECOVERED`}</p>
                  <p>{country.today_new_recovered}</p>
                </div>
                <div className="country-item  d-flex justify-content-between">
                  <p>{`TODAY${String.fromCharCode(39)}S NEW DEATHS`}</p>
                  <p>{country.today_new_deaths}</p>
                </div>
                <div className="country-item  d-flex justify-content-between">
                  <p>{`TODAY${String.fromCharCode(39)}S NEW OPEN CASES`}</p>
                  <p>{country.today_new_deaths}</p>
                </div>
                <div className="country-item  d-flex justify-content-between">
                  <p>TOTAL CASES</p>
                  <p>{country.today_confirmed}</p>
                </div>
                <div className="country-item  d-flex justify-content-between">
                  <p>TOTAL RECOVERED</p>
                  <p>{country.today_recovered}</p>
                </div>
                <div className="country-item  d-flex justify-content-between">
                  <p>TOTAL DEATHS</p>
                  <p>{country.today_deaths}</p>
                </div>
                <div className="country-item  d-flex justify-content-between">
                  <p>TOTAL OPEN CASES</p>
                  <p>{country.today_open_cases}</p>
                </div>
              </div>
            </div>
          )
      }
    </main>
  );
};

export default CovidDetails;
