import React from 'react';
import FormcardClass from './formcard';
import HeaderClass from './header';
import { Iformvalues } from './types/types';

class Formcomponent extends React.Component {
  nameValue: React.RefObject<HTMLInputElement>;
  placeValue: React.RefObject<HTMLInputElement>;
  dateValue: React.RefObject<HTMLInputElement>;
  doingValue: React.RefObject<HTMLSelectElement>;
  confirmValue: React.RefObject<HTMLInputElement>;
  resultValue: React.RefObject<HTMLInputElement>;
  adviceValue: React.RefObject<HTMLInputElement>;
  formArr: React.RefObject<HTMLFormElement>;
  constructor(prop: string) {
    super(prop);
    this.state = {
      formValues: null,
    };
    this.toSubmit = this.toSubmit.bind(this);
    this.nameValue = React.createRef();
    this.placeValue = React.createRef();
    this.dateValue = React.createRef();
    this.doingValue = React.createRef();
    this.confirmValue = React.createRef();
    this.resultValue = React.createRef();
    this.adviceValue = React.createRef();
    this.formArr = React.createRef();
  }
  toSubmit(e: React.FormEvent) {
    const celebrities: string[] = [
      'Michael Jackson',
      'Emma Watson',
      'Justin Bieber',
      'Dwayne Johnson',
      'Michelle Obama',
      'Ben Affleck',
      'Cardi B',
      'Christina Aguilera',
      'Jessica Alba',
      'Sophia Rotaru',
      'Taylor Swift',
      'Britney Spears',
    ];
    const person: string = celebrities[Math.floor(Math.random() * celebrities.length)];
    const objSubmit: Iformvalues = {
      date: this.dateValue.current?.value,
      name: this.nameValue.current?.value,
      doing: this.doingValue.current?.value,
      place: this.placeValue.current?.value,
      advice: this.adviceValue.current?.value,
      result: this.resultValue.current?.value,
    };
    alert(
      `On ${this.dateValue.current?.value} ${this.nameValue.current?.value} and ${person} ${this.doingValue.current?.value} in ${this.placeValue.current?.value}, but Your mom told them: ${this.adviceValue.current?.value}. As a result they got the following picture: ${this.resultValue.current?.value}`
    );
    e.preventDefault();
    console.log(objSubmit);
  }
  render(): React.ReactNode {
    return (
      <div className="form__wrapper">
        <HeaderClass />
        <form onSubmit={this.toSubmit} className="form" ref={this.formArr}>
          <label htmlFor="who">Who r u?</label>
          <input name="who" type="text" ref={this.nameValue} />
          <label htmlFor="where">Where?</label>
          <input name="where" type="text" ref={this.placeValue} />
          <label htmlFor="when">When?</label>
          <input name="when" type="date" ref={this.dateValue} />
          <label htmlFor="doing">What did u doing?</label>
          <select name="doing" ref={this.doingValue}>
            <option>Smth1</option>
            <option>Smth12</option>
            <option>Smth13</option>
          </select>
          <label htmlFor="joke">Please confirm that you are not going to laugh</label>
          <input name="joke" type="checkbox" ref={this.confirmValue} />
          <label htmlFor="positive/negative">What advice they received?</label>
          <div className="radio__container">
            <input name="positive/negative" type="radio" ref={this.adviceValue} /> Be positive
            <input name="positive/negative" type="radio" ref={this.adviceValue} /> Be negative
          </div>
          <label htmlFor="result"></label>
          <input name="result" type="file" ref={this.resultValue} />
          <button type="submit">Submit</button>
        </form>
        {/* <FormcardClass ref={this.nameValue}/> */}
      </div>
    );
  }
}
export default Formcomponent;
