import React from 'react';
import TodoList from './components/todo-list';
import Title from './components/title';
import Toolbar from './components/toolbar';
import TodoAddItemForm from './components/todo-add-form';
import './App.css';
import { FILTER } from './constants';

class App extends React.Component {
  state = {
    searchQuery: '',
    filter: FILTER.ALL,
    items: [
      { id: 1, name: 'Сделать что то 1', done: false, important: false },
      { id: 2, name: 'Сделать что то 2', done: true, important: false }
    ]
  };

  onClickDeleteItem = id => {
    this.setState(({ items }) => {
      return {
        items: items.filter(item => item.id !== id)
      };
    });
  };

  onClickAddItem = label => {
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

  onChangeFilter = newFilter => {
    this.setState({
      filter: newFilter
    });
  };

  onChangeSearch = query => {
    this.setState({
      searchQuery: query
    });
  };

  search(items, query) {
    if (query === '') return items;
    return items.filter(
      it => it.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  filter(items, filter) {
    let filteredItems;
    switch (filter) {
      case FILTER.ACTIVE:
        filteredItems = items.filter(it => !it.done);
        break;
      case FILTER.DONE:
        filteredItems = items.filter(it => it.done);
        break;
      default:
        filteredItems = items;
    }
    return filteredItems;
  }

  render() {
    const doneCount = this.state.items.filter(it => it.done).length;
    const todoCount = this.state.items.length - doneCount;

    const { items, filter, searchQuery } = this.state;
    const visibleItems = this.search(this.filter(items, filter), searchQuery);

    return (
      <div className="page">
        <Title doneCount={doneCount} todoCount={todoCount} />
        <Toolbar
          currentFilter={filter}
          searchQuery={searchQuery}
          onChangeFilter={this.onChangeFilter}
          onChangeSearch={this.onChangeSearch}
        />
        <TodoList
          items={visibleItems}
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
