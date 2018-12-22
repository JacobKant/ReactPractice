import React from 'react';
import Spinner from '../spinner';

const withData = (View, getData) => {
  return class extends React.Component {
    state = {
      data: [],
      loading: true,
      error: false
    };

    componentDidMount() {
      getData()
        .then(it => {
          this.setState({ data: it, loading: false, error: false });
        })
        .catch(err => {
          this.setState({ loading: false, error: true });
        });
    }
    render() {
      const { error, loading, data } = this.state;
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <p>Error</p>;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export { withData };
