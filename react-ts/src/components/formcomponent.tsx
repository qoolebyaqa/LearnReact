import React from 'react';
import HeaderClass from './header';

class Formcomponent extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return (
      <div className="form__wrapper">
        <HeaderClass />
        <h2>Form</h2>
      </div>
    );
  }
}
export default Formcomponent;
