import React from 'react';
import HeaderClass from './header';

class AboutClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return (
      <div>
        <HeaderClass />
        <h1 className="about__wrapper"> About Us</h1>
      </div>
    );
  }
}

export default AboutClass;
