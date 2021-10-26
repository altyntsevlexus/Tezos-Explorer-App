import './styles/index.scss';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import AppRouter from './route/AppRouter';

import { NetworkProvider } from './context/networkContext';
import { BlocksProvider } from './context/blocksContext';
import { BlockProvider } from './context/blockContext';

const App = () => (
  <>
    <Header />
    <NetworkProvider>
      <BlocksProvider>
        <BlockProvider>
          <AppRouter />
        </BlockProvider>
      </BlocksProvider>
    </NetworkProvider>
    <Footer />
  </>
);

export default App;
