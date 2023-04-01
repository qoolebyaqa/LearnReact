import React from 'react';
import { Iformvalues } from './types/types';

function FormCardComponent(props: { formValues: Iformvalues[] }) {
  return (
    <div className="ipnut__card-wrapper">
      {props.formValues.map((value: Iformvalues, index: number) => {
        const backStyles = {
          backgroundImage: `url(${value.result})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        };
        return (
          <li key={index} className="ipnut__card" style={backStyles}>
            <p>{value.name}</p>
            <p>{`On ${value.date} ${value.name} and ${value.person} ${value.doing} in ${value.place}, but Your mom told them: ${value.advice}.`}</p>
          </li>
        );
      })}
    </div>
  );
}
export default FormCardComponent;
