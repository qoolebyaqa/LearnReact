import React from 'react';

class NAClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return <h1 className="home__wrapper">404 page</h1>;
  }
}
export default NAClass;
