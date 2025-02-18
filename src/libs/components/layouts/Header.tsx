import appLogo from '../../../assets/logo.png';
import {getFirstLetter} from '../../../utils';
import {Link} from 'react-router-dom';
import {useProfile} from '../../hooks';

export const Header = () => {
  const { profile } = useProfile();

  return (
    <header className="bg-white px-10 py-4 flex items-center justify-between shadow-md sticky top-0 z-10">
      <div className={'flex items-center gap-10'}>
        <img src={appLogo} style={{height: 42}} alt="Vite logo"/>
        <ul className={'flex items-center justify-center'}>
          <li className="inline-block mx-4">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="inline-block mx-4">
            <Link to={'/pets'}>Pets</Link>
          </li>
          <li className="inline-block mx-4">
            <Link to={'/profile'}>Profile</Link>
          </li>
        </ul>
      </div>
      {profile && (
        <span className={'w-10 h-10 rounded-full bg-green-300 flex items-center justify-center'}>
        {getFirstLetter(profile.firstName)}
      </span>
      )}
    </header>
  );
};