import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <nav className="nav d-flex justify-content-between align-items-center">
        {location.pathname === '/details'
          ? <button type="button" className="btn btn-outline-secondary" onClick={() => history.goBack()}>Home</button>
          : <div />}
        <h3 className="text-white">COVID19 STATS</h3>
        <div />
      </nav>
    </>
  );
};

export default NavBar;
