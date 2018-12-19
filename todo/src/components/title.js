import React from 'react';

const Title = ({ doneCount, todoCount }) => {
  return (
    <div>
      <span>
        <h1>Todo List</h1>
        <span>{todoCount} more to do, {doneCount} done</span>
      </span>
    </div>
  );
};

export default Title;
