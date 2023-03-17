import React from 'react';

class SearchClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  checker() {
    if (localStorage.searched) {
      return localStorage.searched;
    }
    return '';
  }
  render(): React.ReactNode {
    return (
      <div>
        <h3>Search Something</h3>
        <input className="search__input" />
      </div>
    );
  }
}
export default SearchClass;
