import React from 'react';
import { Iformvalues } from './types/types';

class FormcardClass extends React.Component<
  { formValues: Iformvalues[] | [] },
  { textValue: React.RefObject<HTMLDivElement> }
> {
  textValue: React.RefObject<HTMLDivElement>;
  constructor(props: { formValues: Iformvalues[] | [] }) {
    super(props);
    this.textValue = React.createRef();
  }
  render(): React.ReactNode {
    return (
      <div className="ipnut__card-wrapper">
        {this.props.formValues.map((value: Iformvalues, index: number) => {
          return (
            <li key={index} className="ipnut__card">
              <p>{value.name}</p>
              <p>{`On ${value.date} ${value.name} and ${value.person} ${value.doing} in ${value.place}, but Your mom told them: ${value.advice}.`}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default FormcardClass;
