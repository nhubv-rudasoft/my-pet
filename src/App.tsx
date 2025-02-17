import {BrowserRouter as Router} from "react-router-dom"
import {AppRoutes} from './routes/AppRoutes.tsx';
import {Header} from './libs/components/layouts/Header.tsx';
import {useGetUserProfile} from './libs/hooks/userHook.ts';
import {Toaster} from 'react-hot-toast';

function App() {
  const { data } = useGetUserProfile();
  return (
    <Router>
      <div className={'h-screen'}>
        <Toaster />
        {data && <Header userProfile={data}/>}
        <main className={'container mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 py-10'}>
          <AppRoutes/>
        </main>

      </div>
    </Router>
  )
}

export default App
