import React from 'react';

const {
  Provider: SwapiServiceProvider,
  Consumer: SwapiServiceConsumer
} = React.createContext();

const withSwapiService = mapToProps => Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export { SwapiServiceProvider, SwapiServiceConsumer, withSwapiService };
