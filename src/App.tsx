import {BrowserRouter as Router} from "react-router-dom"
import {AppRoutes} from './routes/AppRoutes.tsx';
import {Header} from './libs/components/layouts/Header.tsx';

function App() {
  return (
    <Router>
      <div className={'h-screen'}>
        <Header userProfile={
          {
            id: 1,
            email: '',
            avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            firstName: 'John',
            lastName: 'Doe'
          }}/>
        <main className={'container mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 py-10'}>
          <AppRoutes/>
        </main>

      </div>
    </Router>
  )
}

export default App
