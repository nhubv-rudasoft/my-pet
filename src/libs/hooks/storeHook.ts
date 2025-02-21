import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../app/stores/rootStore';
import {AppDispatch} from '../../app/stores/rootStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
