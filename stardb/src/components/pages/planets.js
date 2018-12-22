import React from 'react';
import { PlanetList, PlanetDetail } from '../sw-components';
import { ErrorBoundry } from '../error-boundry';
import ListDetailRow from '../list-detail-row';

export default class PlanetPage extends React.Component {
  state = {
    itemId: null
  };

  onClickItem = id => {
    this.setState({ itemId: id });
  };

  render() {
    const left = <PlanetList onClickItem={this.onClickItem} />;
    const right =
      this.state.itemId != null ? (
        <PlanetDetail itemId={this.state.itemId} />
      ) : (
        <p>Select item</p>
      );
    return (
      <ErrorBoundry>
        <ListDetailRow left={left} right={right} />
      </ErrorBoundry>
    );
  }
}
