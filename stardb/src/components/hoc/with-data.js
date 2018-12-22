import React from 'react';
import Spinner from '../spinner';

const withData = View => {
  return class extends React.Component {
    state = {
      data: [],
      loading: true,
      error: false
    };

    componentDidMount() {
      this.props
        .getData()
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
