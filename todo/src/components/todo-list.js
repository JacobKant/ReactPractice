import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ items, onDeleted, onToggleImportant, onToggleDone }) => {
  return (
    <div>
      {items.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
