import React from 'react';

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

export default ListDetailRow;
