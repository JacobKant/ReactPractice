import React from 'react';
import './todo-add-form.css';
export default class TodoAddItemForm extends React.Component {
  state = {
    label: ''
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onClickAddItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needs tot be done"
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    );
  }
}
