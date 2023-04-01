import React from 'react';
import { Ipet, petsArr } from './PetsArr';

function PetCard() {
  const arrPet: Ipet[] = petsArr;
  return (
    <ul className="pet__container">
      {arrPet.map((a: Ipet, index: number) => {
        return (
          <li className="pet__card" key={index}>
            <p className="pet__name">{a.name}</p>
            <p className="pet__p">{a.type}</p>
            <p className="pet__p">{a.breed}</p>
            <p className="pet__p">{a.age}</p>
            <img src={a.img} alt="animal" />
            <p className="pet__p">{a.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default PetCard;
