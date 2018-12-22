import React from 'react';
import { withData } from '../hoc/with-data';
import List from '../items-list';
import Detail, { Record } from '../item-detail';
import SwapiService from '../../services/swapi-service';

const {
  getAllPlanets,
  getAllPeople,
  getAllStarships,
  getPlanet,
  getPeople,
  getStarship
} = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const PlanetList = withData(
  withChildFunction(List, ({ name, diameter }) => `${name} (${diameter})`),
  getAllPlanets
);
const PeopleList = withData(
  withChildFunction(List, ({ name, birthYear }) => `${name} (${birthYear})`),
  getAllPeople
);
const StarshipList = withData(
  withChildFunction(List, ({ name, model }) => `${name} (${model})`),
  getAllStarships
);

const PlanetDetail = ({ itemId }) => {
  return (
    <Detail selectedItemId={itemId} getData={getPlanet}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </Detail>
  );
};

const PeopleDetail = ({ itemId }) => {
  return (
    <Detail selectedItemId={itemId} getData={getPeople}>
      <Record field="birthYear" label="Birth Year" />
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
    </Detail>
  );
};

const StarshipDetail = ({ itemId }) => {
  return (
    <Detail selectedItemId={itemId} getData={getStarship}>
      <Record field="model" label="Model" />
      <Record field="maxSpeed" label="Max speed" />
    </Detail>
  );
};

export {
  PlanetList,
  PeopleList,
  StarshipList,
  PlanetDetail,
  PeopleDetail,
  StarshipDetail
};
