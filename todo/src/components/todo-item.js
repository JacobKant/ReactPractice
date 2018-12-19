import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { item, onDeleted, onToggleImportant, onToggleDone } = this.props;
    const style = {
      fontSize: 20,
      textDecoration: this.props.item.done ? 'line-through' : 'none',
      fontWeight: this.props.item.important ? 'bold' : 'normal'
    };
    let classes = '';
    if (this.props.item.important) classes += ' important';
    return (
      <span>
        <span style={style} className={classes} onClick={onToggleDone}>
          {item.name}
        </span>
        <button className="btn btn-primary" onClick={onDeleted}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={onToggleImportant}>
          Important
        </button>
      </span>
    );
  }
}

export default TodoItem;
