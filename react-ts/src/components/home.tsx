import React from 'react';
import SearchBar from './searchbar';
import PetCard from './card';
import Header from './header';

class HomeClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return (
      <div className="home__wrapper">
        <Header />
        <h2>Home</h2>
        <SearchBar />
        <PetCard />
      </div>
    );
  }
}
export default HomeClass;
