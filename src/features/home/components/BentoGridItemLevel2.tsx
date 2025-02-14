import {PetItem} from '../../../libs/types/pet.ts';
import petPhoto from '../../../assets/cat.png';
import {formatPrice} from '../../../utils/helpers.ts';

interface BentoGridItemLevel2Props {
  petItem: PetItem;
}

export const BentoGridItemLevel2 = ({petItem}: BentoGridItemLevel2Props) => {
  return (
    <div className="col-span-2 bg-white rounded-xl p-4 shadow-md">
      <div className="flex items-center gap-3">
        <img
          src={petPhoto}
          alt={petItem.name}
          style={{
            height: 120,
            width: 'auto',
          }}
          className="object-contain"
        />
        <div className={'flex flex-col gap-2'}>
          <div>
            <h3 className="text-base font-medium">
              {petItem.name}
            </h3>
            <p className="text-xs text-gray-500">
              {petItem.description}
            </p>
          </div>
          <p className="text-base font-semibold text-red-900 mt-1">
            {formatPrice(petItem.price)}
          </p>
        </div>
      </div>
    </div>
  );
};