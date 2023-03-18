import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
class SearchClass extends React.Component<{}, { value: string }> {
  constructor(prop: string) {
    super(prop);
    this.state = {
      value: localStorage.searched ? localStorage.searched : '',
    };
    this.ChangeInput = this.ChangeInput.bind(this);
    this.toLocal = this.toLocal.bind(this);
  }
  checker() {
    if (localStorage.searched) {
      return localStorage.searched;
    }
    return '';
  }
  ChangeInput(e?: React.FormEvent<HTMLInputElement>) {
    this.setState(() => ({
      value: (e?.target as HTMLInputElement).value,
    }));
  }
  toLocal() {
    localStorage.setItem('searched', this.state.value);
  }
  render(): React.ReactNode {
    return (
      <div className="search__section">
        <h3>Storage</h3>
        <div className="search__input-wrap">
          <input className="search__input" value={this.state.value} onChange={this.ChangeInput} />
          <button className="search__button" type="submit" onClick={this.toLocal}>
            Save To Storage
          </button>
        </div>
      </div>
    );
  }
}
export default SearchClass;
