import {PetItem} from '../../../libs/types/pet.ts';
import petPhoto from '../../../assets/cat.png';
import {formatPrice} from '../../../utils/helpers.ts';

interface BentoGridItemLevel1Props {
  petItem: PetItem;
}

export const BentoGridItemLevel1 = ({petItem}: BentoGridItemLevel1Props) => {
  return (
    <div className="col-span-2 row-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4">
          <img
            src={petPhoto}
            alt={petItem.name}
            className="object-contain"
            style={{width: 300, height: 'auto'}}
          />
          <div className={'flex flex-col gap-2'}>
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold">
                {petItem.name} 1
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {petItem.description}
              </p>
            </div>
            <p className="text-sm sm:text-xl font-semibold text-red-900 mt-1">
              {formatPrice(petItem.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};