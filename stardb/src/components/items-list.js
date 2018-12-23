import React from 'react';
import PropTypes from 'prop-types';
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

List.defaultProps = {
  onClickItem: () => {}
};

List.propTypes = {
  onClickItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func
};

export default List;
