import { Routes, Route } from "react-router-dom";
import React, {StrictMode, Suspense} from 'react';
import HomePage from '../features/home/HomePage.tsx';

const PetsPage = React.lazy(() => import('../features/pets/PetsPage'));
const ProfilePage = React.lazy(() => import('../features/profile/ProfilePage'));


export const AppRoutes = () => {
  return (
    <StrictMode>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/pets"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PetsPage />
            </Suspense>
          }
        />
      </Routes>
    </StrictMode>
  );
}