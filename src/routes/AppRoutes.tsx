import { Routes, Route } from "react-router-dom"
import ProfilePage from '../features/profile/ProfilePage.tsx';
import HomePage from '../features/home/HomePage.tsx';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={
          <ProfilePage />
        }
      />
    </Routes>
  )
}
