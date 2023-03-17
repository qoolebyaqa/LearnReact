import React from 'react';

class AboutClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return <h1 className="about__wrapper">About Us</h1>;
  }
}

export default AboutClass;
