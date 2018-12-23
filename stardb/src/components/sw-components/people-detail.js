import React from 'react';
import { withSwapiService } from '../swapi-service-context';
import compose from '../hoc/compose';
import Detail, { Record } from '../item-detail';

const mapToProps = swapiService => {
  return {
    getData: swapiService.getPeople
  };
};
const PeopleDetail = props => {
  return (
    <Detail {...props}>
      <Record field="birthYear" label="Birth Year" />
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
    </Detail>
  );
};
export default compose(withSwapiService(mapToProps))(PeopleDetail);
