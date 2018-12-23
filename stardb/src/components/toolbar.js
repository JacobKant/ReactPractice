import React from 'react';
import { Link } from 'react-router-dom';
import './toolbar.css';

const Toolbar = ({ onServiceChange }) => {
  return (
    <header>
      <h1><Link to="/">StarsDB</Link></h1>
      <nav>
        <Link to="/planet/">Planets</Link>
      </nav>
      <nav>
        <Link to="/people/">Persons</Link>
      </nav>
      <nav>
        <Link to="/starship/">Starship</Link>
      </nav>
{/* 
      <button onClick={onServiceChange}>Change Service</button> */}
    </header>
  );
};

export default Toolbar;
