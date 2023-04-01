import React from 'react';
import SearchBar from './searchbar';
import PetCard from './card';
import Header from './header';

function HomePage() {
  return (
    <div className="home__wrapper">
      <Header />
      <h2>Home</h2>
      <SearchBar />
      <PetCard />
    </div>
  );
}
export default HomePage;
