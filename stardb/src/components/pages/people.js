import React from 'react';
import { PeopleList, PeopleDetail } from '../sw-components';
import { ErrorBoundry } from '../error-boundry';
import ListDetailRow from '../list-detail-row';

export default class PeoplePage extends React.Component {
  state = {
    itemId: null
  };

  onClickItem = id => {
    this.setState({ itemId: id });
  };

  render() {
    const left = <PeopleList onClickItem={this.onClickItem} />;
    const right =
      this.state.itemId != null ? (
        <PeopleDetail itemId={this.state.itemId} />
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
