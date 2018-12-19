import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ items, onDeleted, onToggleImportant, onToggleDone }) => {
  return (
    <div>
      {items.map(item => (
        <div style={{ margin: '10px' }} key={item.id}>
          <TodoItem
            item={item}
            onDeleted={() => onDeleted(item.id)}
            onToggleDone={() => onToggleDone(item.id)}
            onToggleImportant={() => onToggleImportant(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
