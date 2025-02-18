import UserProfileForm from './components/UserProfileForm';

export default function ProfilePage() {
  return (
    <div className={'flex flex-col gap-5'}>
      <h1 className={'text-2xl font-bold text-gray-600'}>My Profile</h1>
      <UserProfileForm/>
    </div>
  );
}