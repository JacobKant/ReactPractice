import React from 'react';
import { PlanetList, PlanetDetail } from '../sw-components';
import { ErrorBoundry } from '../error-boundry';
import ListDetailRow from '../list-detail-row';
import { withRouter } from 'react-router-dom';

const PlanetPage = ({ match, history }) => {
  const { id } = match.params;
  const left = <PlanetList onClickItem={id => history.push(id)} />;
  const right = id != null ? <PlanetDetail itemId={id} /> : <p>Select item</p>;

  return (
    <ErrorBoundry>
      <ListDetailRow left={left} right={right} />
    </ErrorBoundry>
  );
};

export default withRouter(PlanetPage);
