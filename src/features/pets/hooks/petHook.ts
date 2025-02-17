import {createQuery} from '../../../utils';
import {getMyPets} from '../services';

export const useMyPets = createQuery(['myPets'], getMyPets);
