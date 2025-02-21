import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from './routes/AppRoutes.tsx';
import { Header } from './libs/components/layouts/Header.tsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './app/stores/rootStore.ts';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className={'h-screen'}>
          <Toaster />
          <Header/>
          <main className={'container mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 py-10'}>
            <AppRoutes/>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App;