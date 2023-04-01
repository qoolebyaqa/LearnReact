import React from 'react';
import { Iformvalues } from './types/types';

function FormCardComponent(props: { formValues: Iformvalues[] }) {
  return (
    <div className="ipnut__card-wrapper">
      {props.formValues.map((value: Iformvalues, index: number) => {
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
export default FormCardComponent;
