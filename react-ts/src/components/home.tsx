import React from 'react';
import PetClass from './card';
import HeaderClass from './header';
import SearchClass from './searchbar';

class HomeClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return (
      <div className="home__wrapper">
        <HeaderClass />
        <h2>Home</h2>
        <SearchClass />
        <PetClass />
      </div>
    );
  }
}
export default HomeClass;
