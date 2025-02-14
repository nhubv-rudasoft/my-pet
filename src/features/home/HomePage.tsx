import PetBentoGrid from './components/PetBentoGrid.tsx';

export default function HomePage() {
  return (
    <div className={'flex flex-col gap-5'}>
      <h1 className={'text-2xl font-bold text-gray-600'}>My Pets</h1>
      <PetBentoGrid />
    </div>
  );
}