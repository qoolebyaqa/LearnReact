import React from 'react';
import { Ipet, petsArr } from './PetsArr';

const arrPet: Ipet[] = petsArr;

class PetClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
    return (
      <div className="card__wrapper">
        <img src={arrPet[0].img} alt="" />
        {/* <ul>
          {arrPet.map((value) => {
            return (
              <li>
                <p>{value.name}</p>
                <p>{value.type}</p>
                <p>{value.breed}</p>
                <p>{value.age}</p>
                <img src={value.img} alt="as" />
                <p>{value.description}</p>
              </li>
            )})}
        </ul> */}
      </div>
    );
  }
}
export default PetClass;
