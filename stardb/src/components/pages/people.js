import React from 'react';
import { PeopleList, PeopleDetail } from '../sw-components';
import { ErrorBoundry } from '../error-boundry';
import ListDetailRow from '../list-detail-row';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;
  
  const left = <PeopleList onClickItem={id => history.push(id)} />;

  const right = id != null ? <PeopleDetail itemId={id} /> : <p>Select item</p>;

  return (
    <ErrorBoundry>
      <ListDetailRow left={left} right={right} />
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);
