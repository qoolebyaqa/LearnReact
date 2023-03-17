import React from 'react';

class HomeClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return <h1 className="home__wrapper">Home</h1>;
  }
}
export default HomeClass;
