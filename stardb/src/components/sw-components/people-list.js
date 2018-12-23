import withData from '../hoc/with-data';
import withChildFunction from '../hoc/with-child-func';
import { withSwapiService } from '../swapi-service-context';
import compose from '../hoc/compose';
import List from '../items-list';

const mapToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const renderListItem = ({ name, birthYear }) => `${name} (${birthYear})`;

const PeopleList = compose(
  withSwapiService(mapToProps),
  withData,
  withChildFunction(renderListItem)
)(List);

export default PeopleList;
