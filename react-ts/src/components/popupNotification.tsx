import React from 'react';
import { Iformvalues } from './types/types';

function PopupNotification(props: Iformvalues) {
  return (
    <>
      <div className="popup__wrapper">
        <div>You created the card with following data: </div>
        <li className="ipnut__card">
          <p>Main character: {props.name}</p>
          <p>Date of action: {props.date}</p>
          <p>Place of action: {props.place}</p>
          <p>Action: {props.doing}</p>
          <p>Phrase of third party: {props.advice}</p>
        </li>
        <button onClick={props.functoClose} className="popup__btn">
          OK
        </button>
      </div>
    </>
  );
}
export default PopupNotification;
