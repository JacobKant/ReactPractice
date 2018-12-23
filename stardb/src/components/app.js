import React from 'react';
import Toolbar from './toolbar';
import RandomPlanet from './random-planet';
import PeoplePage from './pages/people';
import PlanetPage from './pages/planets';
import StarshipPage from './pages/starships';
import { SwapiServiceProvider } from './swapi-service-context';
import './app.css';
import SwapiService from '../services/swapi-service';

export default class App extends React.Component {
  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {};

  render() {
    return (
      <div>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Toolbar onServiceChange={this.onServiceChange} />
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </SwapiServiceProvider>
      </div>
    );
  }
}
