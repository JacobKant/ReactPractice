import React from 'react';
import SwapiService from '../services/swapi-service';
import Spinner from './spinner';
import './random-planet.css';

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.setState({ loading: true });
    this.swapiService.getPlanet(id).then(it => {
      this.setState({ planet: it, loading: false });
    });
  }

  render() {
    const { planet, loading } = this.state;
    const view = loading ? <Spinner /> : <PlanetView planet={planet} />;
    return <div className="flex-box">{view}</div>;
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
