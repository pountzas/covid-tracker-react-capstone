import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCovidStat } from '../redux/homeData/covidhome';
import { filterCovidStats } from '../redux/filter/filterLocation';
import CovidComp from './CovidComp';

const CovidHome = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.covidData);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidStat());
    }
  }, []);

  const filterEvent = (e) => {
    dispatch(filterCovidStats({ value: e.target.value, data }));
  };

  const dataToUse = countries.filtered.length === 0 ? data : countries.filtered;
  const randomNum = Math.round(Math.random() * dataToUse.length);

  return (
    <main>
      <div className="">
        {
          dataToUse.length === 0
            ? null
            : (
              <div className="hero">
                <div className="align--items-center" />
                <div className="hero-section text-white text-center">
                  <Link to={{ pathname: '/details', search: `country=${dataToUse[randomNum][0]}` }} className="text-white text-uppercase text-decoration-none text-center">{dataToUse[randomNum][0]}</Link>
                  <p className="font-weight-bolder text-center mt-2">{`${dataToUse[randomNum][1].today_new_confirmed} Recently confirmed`}</p>
                </div>
              </div>
            )
        }
        {
          dataToUse.length === 0
            ? null
            : (
              <div className="search-page my-background d-flex justify-content-between align-content-center">
                <p className="text-white font-weight-bolder">Search Filter</p>
                <select value={countries.value} onChange={(e) => filterEvent(e)} className="border select-box my-background text-white">
                  <option value="all" className="text-info">filter by no_of_cases</option>
                  <option value="0">0 - 100</option>
                  <option value="101">101 - 500</option>
                  <option value="501">501 - 1000</option>
                  <option value="1000">1000+</option>
                </select>
              </div>
            )
        }
        <div className="d-flex flex-wrap">
          {dataToUse.map((d) => (
            <CovidComp
              key={d[0]}
              country={d[0]}
              newConfirmed={d[1].today_new_confirmed}
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default CovidHome;
