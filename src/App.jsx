import './styles/index.scss';

import AppRouter from './route/AppRouter';

import { NetworkProvider } from './context/networkContext';
import { BlocksProvider } from './context/blocksContext';
import { BlockProvider } from './context/blockContext';

const App = () => (
  <NetworkProvider>
    <BlocksProvider>
      <BlockProvider>
        <AppRouter />
      </BlockProvider>
    </BlocksProvider>
  </NetworkProvider>
);

export default App;
