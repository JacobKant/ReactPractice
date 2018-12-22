import React from 'react';
import SwapiService from '../services/swapi-service';
import Spinner from './spinner';

const Record = ({ item, field, label }) => {
  return (
    <li>
      <span>{label} : {item[field]}</span>
    </li>
  );
};
export { Record };

class Detail extends React.Component {
  state = {
    item: {},
    loading: false
  };
  swapiService = new SwapiService();

  loadItem() {
    const { selectedItemId, getData } = this.props;
    this.setState({ loading: true });
    getData(selectedItemId).then(it =>
      this.setState({ item: it, loading: false })
    );
  }

  componentDidMount() {
    this.loadItem();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.selectedItemId !== this.props.selectedItemId) {
      this.loadItem();
    }
  }

  render() {
    const {
      loading,
      item,
      item: { name, imgUrl }
    } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (!this.state.item.name) {
      return null;
    }

    return (
      <div>
        <img src={imgUrl} alt="people" />
        <h2>{name}</h2>
        <ul>
          {React.Children.map(this.props.children, (child, idx) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );
  }
}

export default Detail;
