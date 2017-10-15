import React from 'react';
import { Link } from 'react-router';

export default props => {
  return (
    <div className="tabs">
      <Link to="/">search</Link>
      <Link to="/myheroes">my heroes</Link>
    </div>
  );
};
