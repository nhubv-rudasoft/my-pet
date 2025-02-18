import {PetItem} from '../types/petType.ts';
import {Get} from '../../../app/configs';
import {PetsConstants} from '../constants';

const PETS_API_URI = PetsConstants.PETS_API_URI;

export function getMyPets() {
  return Get<PetItem[]>(PETS_API_URI.GET_PETS);
}