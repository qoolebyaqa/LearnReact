import React from 'react';
import FormcardClass from './formcard';
import HeaderClass from './header';
import { Iformvalues } from './types/types';

class Formcomponent extends React.Component<{ key: string }, { formValues: Iformvalues[] }> {
  nameValue: React.RefObject<HTMLInputElement>;
  placeValue: React.RefObject<HTMLInputElement>;
  dateValue: React.RefObject<HTMLInputElement>;
  doingValue: React.RefObject<HTMLSelectElement>;
  confirmValue: React.RefObject<HTMLInputElement>;
  resultValue: React.RefObject<HTMLInputElement>;
  adviceValue: React.RefObject<HTMLInputElement>;
  constructor(prop: { key: string }) {
    super(prop);
    this.state = {
      formValues: [],
    };
    this.toSubmit = this.toSubmit.bind(this);
    this.nameValue = React.createRef();
    this.placeValue = React.createRef();
    this.dateValue = React.createRef();
    this.doingValue = React.createRef();
    this.confirmValue = React.createRef();
    this.resultValue = React.createRef();
    this.adviceValue = React.createRef();
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
    const Cperson: string = celebrities[Math.floor(Math.random() * celebrities.length)];
    const objSubmit: Iformvalues = {
      date: this.dateValue.current?.value,
      name: this.nameValue.current?.value,
      doing: this.doingValue.current?.value,
      place: this.placeValue.current?.value,
      advice: this.adviceValue.current?.name,
      result: this.resultValue.current?.value,
      person: Cperson,
    };
    const copyState = Object.assign([], this.state.formValues);
    copyState.push(objSubmit);
    e.preventDefault();
    this.setState(() => ({
      formValues: copyState,
    }));
  }
  render(): React.ReactNode {
    return (
      <div className="form__wrapper">
        <HeaderClass />
        <form onSubmit={this.toSubmit} className="form">
          <label htmlFor="who">Who r u?</label>
          <input name="who" type="text" ref={this.nameValue} required autoComplete="off" />
          <label htmlFor="where">Where?</label>
          <input name="where" type="text" ref={this.placeValue} required autoComplete="off" />
          <label htmlFor="when">When?</label>
          <input name="when" type="date" ref={this.dateValue} required />
          <label htmlFor="doing">What did u doing?</label>
          <select required name="doing" ref={this.doingValue}>
            <option>Play the accordion</option>
            <option>Learn kyrgyz language</option>
            <option>Watch anime</option>
            <option>Discuss gatchi</option>
          </select>
          <label htmlFor="joke">Please confirm that you are not going to laugh</label>
          <input required name="joke" type="checkbox" ref={this.confirmValue} />
          <label htmlFor="positive">What advice they received?</label>
          <div className="radio__container">
            <input name="be positive" type="radio" ref={this.adviceValue} /> Be positive
            <input name="be negative" type="radio" ref={this.adviceValue} /> Be negative
          </div>
          <label htmlFor="result"></label>
          <input name="result" type="file" ref={this.resultValue} />
          <button type="submit">Submit</button>
        </form>
        <FormcardClass formValues={this.state.formValues} />
      </div>
    );
  }
}
export default Formcomponent;
