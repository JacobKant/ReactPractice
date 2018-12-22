import React from 'react';
import Toolbar from './toolbar';
import RandomPlanet from './random-planet';
import PeoplePage from './people-page';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
