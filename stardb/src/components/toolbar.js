import React from 'react';
import './toolbar.css';

const Toolbar = ({ onServiceChange }) => {
  return (
    <header>
      <h1>StarsDB</h1>
      <nav>Planets</nav>
      <nav>Persons</nav>
      <nav>Vehicle</nav>

      <button onClick={onServiceChange}>Change Service</button>
    </header>
  );
};

export default Toolbar;
