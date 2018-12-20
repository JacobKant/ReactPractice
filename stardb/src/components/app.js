import React from 'react';
import Toolbar from './toolbar';
import RandomPlanet from './random-planet';
import List from './items-list';
import Detail from './item-detail';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <RandomPlanet />
        <div className="flex-box">
          <List />
          <Detail />
        </div>
      </div>
    );
  }
}
