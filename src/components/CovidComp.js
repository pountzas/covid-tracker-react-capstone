import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CovidComp = (props) => {
  const { country, newConfirmed } = props;

  return (
    <div key={country} className="covid-comp px-2 pt-2">

      <div className="more-icon">
        <Link to={{ pathname: '/details', search: `country=${country}` }} className="text-white">
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="covid-comp-p pt-4 text-center">
        <Link to={{ pathname: '/details', search: `country=${country}` }}>
          {country}
        </Link>
        <p>{newConfirmed}</p>
      </div>
    </div>
  );
};

CovidComp.propTypes = {
  country: PropTypes.string.isRequired,
  newConfirmed: PropTypes.number.isRequired,
};

export default CovidComp;
