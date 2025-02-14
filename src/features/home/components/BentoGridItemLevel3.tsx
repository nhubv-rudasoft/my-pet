import {PetItem} from '../../../libs/types/pet.ts';
import petPhoto from '../../../assets/cat.png';
import {formatPrice} from '../../../utils/helpers.ts';

interface BentoGridItemLevel2Props {
  petItem: PetItem;
}

export const BentoGridItemLevel3 = ({petItem}: BentoGridItemLevel2Props) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-4 lg:p-4 shadow-md">
      <div className="flex flex-col">
        <div className={'flex items-center justify-center'}>
          <img
            src={petPhoto}
            alt={petItem.name}
            style={{
              height: 100,
              width: 'auto',
            }}
            className="object-contain"
          />
        </div>
        <div className={'flex flex-row justify-between items-center'}>
          <h3 className="text-base font-medium mt-2">
            {petItem.name}
          </h3>
          <p className="text-base font-semibold text-red-900">
            {formatPrice(petItem.price)}
          </p>
        </div>
      </div>
    </div>
  );
};