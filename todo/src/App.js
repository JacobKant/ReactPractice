import React from 'react';
import TodoList from './components/todo-list';
import Title from './components/title';
import Toolbar from './components/toolbar';
import TodoAddItemForm from './components/todo-add-form';
import './App.css';

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Сделать что то 1', done: false, important: false },
      { id: 2, name: 'Сделать что то 2', done: true, important: false },
      { id: 3, name: 'Сделать что то 3', done: false, important: false },
      { id: 4, name: 'Сделать что то 4', done: false, important: false }
    ]
  };

  onClickDeleteItem = id => {
    this.setState(({ items }) => {
      return {
        items: items.filter(item => item.id !== id)
      };
    });
  };

  onClickAddItem = (label) => {
    this.setState(state => {
      return {
        items: [
          ...state.items,
          { id: Date.now(), name: label, done: false, important: false }
        ]
      };
    });
  };

  onToggleDone = id => {
    this.setState(state => {
      const idx = state.items.findIndex(it => it.id === id);
      const oldItem = state.items[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      return {
        items: [
          ...state.items.slice(0, idx),
          newItem,
          ...state.items.slice(idx + 1)
        ]
      };
    });
  };

  onToggleImportant = id => {
    this.setState(state => {
      const idx = state.items.findIndex(it => it.id === id);
      const oldItem = state.items[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      return {
        items: [
          ...state.items.slice(0, idx),
          newItem,
          ...state.items.slice(idx + 1)
        ]
      };
    });
  };

  render() {
    const doneCount = this.state.items.filter(it => it.done).length;
    const todoCount = this.state.items.length - doneCount;
    return (
      <div className="page">
        <Title doneCount={doneCount} todoCount={todoCount} />
        <Toolbar />
        <TodoList
          items={this.state.items}
          onDeleted={this.onClickDeleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <TodoAddItemForm onClickAddItem={this.onClickAddItem} />
      </div>
    );
  }
}

export default App;
