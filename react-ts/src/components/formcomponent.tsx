import React, { useState } from 'react';
import HeaderClass from './header';
import { Iformvalues } from './types/types';
import { celebrities } from './PetsArr';
import FormCardComponent from './formcard';

function Formcomponent() {
  const [cur, setter] = useState<{ formValues: Iformvalues[] }>({ formValues: [] });
  const [imgSt, setImg] = useState<string>();
  const nameValue: React.RefObject<HTMLInputElement> = React.createRef();
  const placeValue: React.RefObject<HTMLInputElement> = React.createRef();
  const dateValue: React.RefObject<HTMLInputElement> = React.createRef();
  const doingValue: React.RefObject<HTMLSelectElement> = React.createRef();
  const confirmValue: React.RefObject<HTMLInputElement> = React.createRef();
  const adviceValue: React.RefObject<HTMLInputElement> = React.createRef();
  const resultImg: React.RefObject<HTMLInputElement> = React.createRef();
  const fileReader = new FileReader();

  const toSubmit = (e: React.FormEvent) => {
    const Cperson: string = celebrities[Math.floor(Math.random() * celebrities.length)];
    const objSubmit: Iformvalues = {
      date: dateValue.current?.value,
      name: nameValue.current?.value,
      doing: doingValue.current?.value,
      place: placeValue.current?.value,
      advice: adviceValue.current?.name,
      result: imgSt,
      person: Cperson,
    };
    e.preventDefault();
    const copyState: { formValues: Iformvalues[] } = Object.assign([], cur);
    copyState.formValues.push(objSubmit);
    setter(copyState);
    if (
      dateValue.current &&
      nameValue.current &&
      doingValue.current &&
      placeValue.current &&
      adviceValue.current &&
      resultImg.current &&
      confirmValue.current
    ) {
      dateValue.current.value = '';
      nameValue.current.value = '';
      doingValue.current.value = '';
      placeValue.current.value = '';
      adviceValue.current.checked = false;
      resultImg.current.value = '';
      confirmValue.current.checked = false;
    }
  };
  fileReader.onloadend = () => {
    setImg(fileReader.result as string);
  };

  const uploader = (sel: FileList | null) => {
    sel ? fileReader.readAsDataURL(sel[0]) : '';
  };
  return (
    <div className="form__wrapper">
      <HeaderClass />
      <form onSubmit={toSubmit} className="form">
        <label htmlFor="who">Who r u?</label>
        <input name="who" type="text" ref={nameValue} required autoComplete="off" />
        <label htmlFor="where">Where?</label>
        <input name="where" type="text" ref={placeValue} required autoComplete="off" />
        <label htmlFor="when">When?</label>
        <input name="when" type="date" ref={dateValue} required />
        <label htmlFor="doing">What did u doing?</label>
        <select required name="doing" ref={doingValue}>
          <option>Play the accordion</option>
          <option>Learn kyrgyz language</option>
          <option>Watch anime</option>
          <option>Discuss gatchi</option>
        </select>
        <label htmlFor="joke">Please confirm that you are not going to laugh</label>
        <input required name="joke" type="checkbox" ref={confirmValue} />
        <label htmlFor="positive">What advice they received?</label>
        <div className="radio__container">
          <input name="be positive" type="radio" ref={adviceValue} defaultChecked={true} />
          Be positive
          <input name="be negative" type="radio" ref={adviceValue} /> Be negative
        </div>
        <label htmlFor="result"></label>
        <input
          name="result"
          type="file"
          onChange={(e) => uploader((e.target as HTMLInputElement).files)}
          accept=".png, .jpg"
          ref={resultImg}
        />
        <button type="submit">Submit</button>
      </form>
      <FormCardComponent formValues={cur.formValues} />
    </div>
  );
}
export default Formcomponent;
