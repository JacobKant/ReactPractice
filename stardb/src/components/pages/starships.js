import React from 'react';
import { StarshipList, StarshipDetail } from '../sw-components';
import { ErrorBoundry } from '../error-boundry';
import ListDetailRow from '../list-detail-row';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ match, history }) => {
  const { id } = match.params;
  const left = <StarshipList onClickItem={id => history.push(id)} />;
  const right =
    id != null ? <StarshipDetail itemId={id} /> : <p>Select item</p>;

  return (
    <ErrorBoundry>
      <ListDetailRow left={left} right={right} />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipPage);
