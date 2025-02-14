import {UserProfile} from '../../types/user.ts';
import appLogo from '../../../assets/logo.png';
import {getFirstLetter} from '../../../utils/helpers.ts';

interface HeaderProps {
  userProfile: UserProfile;
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