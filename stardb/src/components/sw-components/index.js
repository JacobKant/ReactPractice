import React from 'react';
import { withData } from '../hoc/with-data';
import List from '../items-list';
import Detail, { Record } from '../item-detail';
import { withSwapiService } from '../swapi-service-context';

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const PlanetList = withSwapiService(
  withData(
    withChildFunction(List, ({ name, diameter }) => `${name} (${diameter})`)
  ),
  swapiService => {
    return {
      getData: swapiService.getAllPlanets
    };
  }
);
const PeopleList = withSwapiService(
  withData(
    withChildFunction(List, ({ name, birthYear }) => `${name} (${birthYear})`)
  ),
  swapiService => {
    return {
      getData: swapiService.getAllPeople
    };
  }
);
const StarshipList = withSwapiService(
  withData(withChildFunction(List, ({ name, model }) => `${name} (${model})`)),
  swapiService => {
    return {
      getData: swapiService.getAllStarships
    };
  }
);

const PlanetDetail = withSwapiService(
  props => {
    return (
      <Detail {...props}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </Detail>
    );
  },
  swapiService => {
    return {
      getData: swapiService.getPlanet
    };
  }
);

const PeopleDetail = withSwapiService(
  props => {
    return (
      <Detail {...props}>
        <Record field="birthYear" label="Birth Year" />
        <Record field="height" label="Height" />
        <Record field="mass" label="Mass" />
      </Detail>
    );
  },
  swapiService => {
    return {
      getData: swapiService.getPeople
    };
  }
);

const StarshipDetail = withSwapiService(
  props => {
    return (
      <Detail {...props}>
        <Record field="model" label="Model" />
        <Record field="maxSpeed" label="Max speed" />
      </Detail>
    );
  },
  swapiService => {
    return {
      getData: swapiService.getStarship
    };
  }
);

export {
  PlanetList,
  PeopleList,
  StarshipList,
  PlanetDetail,
  PeopleDetail,
  StarshipDetail
};
