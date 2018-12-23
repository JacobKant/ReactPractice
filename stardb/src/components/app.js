import React from 'react';
import Toolbar from './toolbar';
import RandomPlanet from './random-planet';
import PeoplePage from './pages/people';
import PlanetPage from './pages/planets';
import StarshipPage from './pages/starships';
import { SwapiServiceProvider } from './swapi-service-context';
import './app.css';
import SwapiService from '../services/swapi-service';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default class App extends React.Component {
  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {};

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div>
              <Toolbar onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route
                  path="/"
                  render={() => <h2 className="flex-box card">Welcome</h2>}
                  exact
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planet/:id?" component={PlanetPage} />
                <Route path="/starship/:id?" component={StarshipPage} />
                <Route
                  render={() => (
                    <h2 className="flex-box card">Page not found</h2>
                  )}
                />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
