import React from 'react';
import withData from '../hoc/with-data';
import compose from '../hoc/compose';
import List from '../items-list';
import Detail, { Record } from '../item-detail';
import { withSwapiService } from '../swapi-service-context';

const withChildFunction = fn => Wrapped => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const PlanetList = compose(
  withSwapiService(swapiService => {
    return {
      getData: swapiService.getAllPlanets
    };
  }),
  withData,
  withChildFunction(({ name, diameter }) => `${name} (${diameter})`)
)(List);

const PeopleList = compose(
  withSwapiService(swapiService => {
    return {
      getData: swapiService.getAllPeople
    };
  }),
  withData,
  withChildFunction(({ name, birthYear }) => `${name} (${birthYear})`)
)(List);

const StarshipList = compose(
  withSwapiService(swapiService => {
    return {
      getData: swapiService.getAllStarships
    };
  }),
  withData,
  withChildFunction(({ name, model }) => `${name} (${model})`)
)(List);

const PlanetDetail = compose(
  withSwapiService(swapiService => {
    return {
      getData: swapiService.getPlanet
    };
  })(props => {
    return (
      <Detail {...props}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </Detail>
    );
  })
);

const PeopleDetail = compose(
  withSwapiService(swapiService => {
    return {
      getData: swapiService.getPeople
    };
  })(props => {
    return (
      <Detail {...props}>
        <Record field="birthYear" label="Birth Year" />
        <Record field="height" label="Height" />
        <Record field="mass" label="Mass" />
      </Detail>
    );
  })
);

const StarshipDetail = compose(
  withSwapiService(swapiService => {
    return {
      getData: swapiService.getStarship
    };
  })
)(props => {
  return (
    <Detail {...props}>
      <Record field="model" label="Model" />
      <Record field="maxSpeed" label="Max speed" />
    </Detail>
  );
});

export {
  PlanetList,
  PeopleList,
  StarshipList,
  PlanetDetail,
  PeopleDetail,
  StarshipDetail
};
