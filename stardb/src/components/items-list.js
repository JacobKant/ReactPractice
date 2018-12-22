import React from 'react';
import './items-list.css';

const List = ({ children, onClickItem, data }) => {
  const items = data.map(it => {
    const label = children(it);
    return (
      <div className="list-item" onClick={() => onClickItem(it.id)} key={it.id}>
        {label}
      </div>
    );
  });
  return <div>{items}</div>;
};

export default List;
