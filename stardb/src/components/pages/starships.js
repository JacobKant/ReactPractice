import React from 'react';
import { StarshipList, StarshipDetail } from '../sw-components';
import { ErrorBoundry } from '../error-boundry';
import ListDetailRow from '../list-detail-row';

export default class StarshipPage extends React.Component {
  state = {
    itemId: null
  };

  onClickItem = id => {
    this.setState({ itemId: id });
  };

  render() {
    const left = <StarshipList onClickItem={this.onClickItem} />;

    const right =
      this.state.itemId != null ? (
        <StarshipDetail itemId={this.state.itemId} />
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
