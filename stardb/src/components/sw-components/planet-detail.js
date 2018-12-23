import React from 'react';
import { withSwapiService } from '../swapi-service-context';
import compose from '../hoc/compose';
import Detail, { Record } from '../item-detail';

const mapToProps = swapiService => {
  return {
    getData: swapiService.getPlanet
  };
};

const PlanetDetail = props => {
  return (
    <Detail {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </Detail>
  );
};

export default compose(withSwapiService(mapToProps))(PlanetDetail);
