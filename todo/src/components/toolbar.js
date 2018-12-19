import React from 'react';

const Toolbar = () => {
  return (
    <span>
      <input type="text" placeholder="type to search" />
      <button>All</button>
      <button>Active</button>
      <button>Done</button>
    </span>
  );
};

export default Toolbar;
