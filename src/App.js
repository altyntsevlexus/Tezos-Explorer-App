import './styles/index.scss';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import AppRouter from './route/AppRouter.jsx';

import { NetworkProvider } from './context/networkContext.jsx';
import { BlocksProvider } from './context/blocksContext.jsx';

const App = () => (
  <>
    <Header />
    <NetworkProvider>
      <BlocksProvider>
        <AppRouter />
      </BlocksProvider>
    </NetworkProvider>
    <Footer />
  </>
);

export default App;
