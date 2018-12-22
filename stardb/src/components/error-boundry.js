import React from 'react';
export class ErrorBoundry extends React.Component {
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  state = {
    hasError: false
  };
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
