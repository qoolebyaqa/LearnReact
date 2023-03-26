import React from 'react';

class FormcardClass extends React.Component {
  textValue: React.RefObject<HTMLDivElement>;
  constructor(prop: string) {
    super(prop);
    this.textValue = React.createRef();
  }
  render(): React.ReactNode {
    return (
      <div className="card__wrapper">
        <h1>card</h1>
      </div>
    );
  }
}

export default FormcardClass;
