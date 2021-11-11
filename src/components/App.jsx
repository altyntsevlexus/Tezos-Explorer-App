import '../styles/index.scss';

import AppRouter from '../route/AppRouter';

import { NetworkProvider } from '../contexts/networkContext';
import { BlocksProvider } from '../contexts/blocksContext';
import { BlockProvider } from '../contexts/blockContext';
import { ThemeProvider } from '../contexts/themeContext';
import { NavigationProvider } from '../contexts/navigationC';

const App = () => (
  <ThemeProvider>
    <NetworkProvider>
      <BlocksProvider>
        <BlockProvider>
          <NavigationProvider>
            <AppRouter />
          </NavigationProvider>
        </BlockProvider>
      </BlocksProvider>
    </NetworkProvider>
  </ThemeProvider>
);

export default App;
