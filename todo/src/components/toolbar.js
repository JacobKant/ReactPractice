import React from 'react';
import './toolbar.css';
import { FILTER } from '../constants';

const Toolbar = ({
  currentFilter,
  searchQuery,
  onChangeFilter,
  onChangeSearch
}) => {
  const buttons = [
    { filter: FILTER.ALL, label: 'All' },
    { filter: FILTER.ACTIVE, label: 'Active' },
    { filter: FILTER.DONE, label: 'Done' }
  ].map(it => {
    const isActive = it.filter === currentFilter;
    const clazz = isActive ? 'active' : '';
    return (
      <button
        key={it.label}
        className={`btn btn-outline-primary ${clazz}`}
        onClick={() => onChangeFilter(it.filter)}
      >
        {it.label}
      </button>
    );
  });

  return (
    <div className="toolbar-container">
      <input
        type="text"
        placeholder="type to search"
        className="form-control"
        value={searchQuery}
        onChange={e => onChangeSearch(e.target.value)}
      />
      {buttons}
    </div>
  );
};

export default Toolbar;
