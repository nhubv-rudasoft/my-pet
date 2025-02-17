import {BentoGridItemLevel1} from './BentoGridItemLevel1.tsx';
import React from 'react';
import {BentoGridItemLevel3} from './BentoGridItemLevel3.tsx';
import {BentoGridItemLevel2} from './BentoGridItemLevel2.tsx';
import {useMyPets} from '../hooks';

export default function PetBentoGrid() {
  const {data: pets} = useMyPets();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-3 gap-5 sm:gap-3 p-2 sm:p-4">
      {pets?.map((pet) => (
        <React.Fragment key={pet.id}>
          {pet.priority === 1 && (<BentoGridItemLevel1 petItem={pet} />)}
          {pet.priority === 2 && (<BentoGridItemLevel2 petItem={pet} />)}
          {pet.priority === 3 && (<BentoGridItemLevel3 petItem={pet} />)}
        </React.Fragment>
      ))}
    </div>
  );
}