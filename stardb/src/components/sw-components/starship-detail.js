import React from 'react';
import { withSwapiService } from '../swapi-service-context';
import compose from '../hoc/compose';
import Detail, { Record } from '../item-detail';

const mapToProps = swapiService => {
  return {
    getData: swapiService.getStarship
  };
};
const StarshipList = props => {
  return (
    <Detail {...props}>
      <Record field="model" label="Model" />
      <Record field="maxSpeed" label="Max speed" />
    </Detail>
  );
};
export default compose(withSwapiService(mapToProps))(StarshipList);
