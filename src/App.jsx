import './styles/index.scss';

import AppRouter from './route/AppRouter';

import { NetworkProvider } from './context/networkContext';
import { BlocksProvider } from './context/blocksContext';
import { BlockProvider } from './context/blockContext';
import { ThemeProvider } from './context/themeContext';

const App = () => (
  <ThemeProvider>
    <NetworkProvider>
      <BlocksProvider>
        <BlockProvider>
          <AppRouter />
        </BlockProvider>
      </BlocksProvider>
    </NetworkProvider>
  </ThemeProvider>
);

export default App;
