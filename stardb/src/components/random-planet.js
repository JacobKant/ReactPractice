import React from 'react';
import SwapiService from '../services/swapi-service';
import Spinner from './spinner';
import './random-planet.css';

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20) + 3;
    this.swapiService
      .getPlanet(id)
      .then(it => {
        this.setState({ planet: it, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const { planet, loading, error } = this.state;
    const spinnerView = loading ? <Spinner /> : null;
    const errorView = error ? <p>Error</p> : null;
    const planetView =
      !loading && !error ? <PlanetView planet={planet} /> : null;

    return (
      <div className="flex-box">
        {spinnerView}
        {errorView}
        {planetView}
      </div>
    );
  }
}

const PlanetView = props => {
  const { id, name, population, rotationPeriod, diameter } = props.planet;
  const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  return (
    <React.Fragment>
      <img src={imgUrl} alt="planet" />
      <h2>{name}</h2>
      <ul>
        <li>population: {population}</li>
        <li>rotationPeriod: {rotationPeriod}</li>
        <li>diameter: {diameter}</li>
      </ul>
    </React.Fragment>
  );
};
