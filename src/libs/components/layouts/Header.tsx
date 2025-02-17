import appLogo from '../../../assets/logo.png';
import {UserProfileResponse} from '../../types/userType.ts';
import {getFirstLetter} from '../../../utils';

interface HeaderProps {
  userProfile: UserProfileResponse;
}

export const Header = ({userProfile}: HeaderProps) => {
  return (
    <header className="bg-white px-10 py-4 flex items-center justify-between shadow-md">
      <img src={appLogo} style={{height: 42}} alt="Vite logo" />
      <span className={'w-10 h-10 rounded-full bg-green-300 flex items-center justify-center'}>
        {getFirstLetter(userProfile.firstName)}
      </span>
    </header>
  );
};