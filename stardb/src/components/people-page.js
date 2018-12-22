import React from 'react';
import Detail, { Record } from './item-detail';
import {
  PeopleList,
  PlanetList,
  StarshipList,
  PeopleDetail
} from './sw-components';
import SwapiService from '../services/swapi-service';
import { ErrorBoundry } from './error-boundry';

const ListDetailRow = ({ left, right }) => {
  return (
    <div>
      <div className="flex-box">
        <div className="card">{left}</div>
        <div className="card">{right}</div>
      </div>
    </div>
  );
};

export default class PeoplePage extends React.Component {
  state = {
    selectedItemId: 1
  };
  swapiService = new SwapiService();
  onClickItem = id => {
    this.setState({ selectedItemId: id });
  };

  render() {
    const left = (
      <div>
        <PeopleList onClickItem={this.onClickItem} />
      </div>
    );

    const right = <PeopleDetail itemId={this.state.selectedItemId} />;

    return (
      <ErrorBoundry>
        <ListDetailRow left={left} right={right} />
      </ErrorBoundry>
    );
  }
}
