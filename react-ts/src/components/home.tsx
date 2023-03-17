import React from 'react';
import SearchClass from './searchbar';

class HomeClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return (
      <div className="home__wrapper">
        <h2>Home</h2>
        <SearchClass />
      </div>
    );
  }
}
export default HomeClass;
