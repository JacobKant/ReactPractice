import React from 'react';
import './title.css';
const Title = ({ doneCount, todoCount }) => {
  return (
    <div className="title-container">
      <h1>Todo List</h1>
      <span>
        {todoCount} more to do, {doneCount} done
      </span>
    </div>
  );
};

export default Title;
