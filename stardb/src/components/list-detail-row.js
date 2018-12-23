import React from 'react';
import PropTypes from 'prop-types';
 
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

ListDetailRow.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default ListDetailRow;
