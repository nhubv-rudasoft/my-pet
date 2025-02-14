import {PetItem} from '../../../libs/types/pet.ts';
import api from '../../../app/axios.ts';
import {useCallback, useState} from 'react';

export const useHomeHook = () => {
  const [pets, setPets] = useState<PetItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPets = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get<PetItem[]>('/myPets');
      setPets(response.data);
    } catch {
      setPets([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    pets,
    loading,
    fetchPets,
  };
}