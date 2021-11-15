import '../styles/index.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../route/AppRouter';

import Header from './shared/Header';
import Footer from './shared/Footer';

import { NetworkProvider } from '../contexts/networkContext';
import { BlocksProvider } from '../contexts/blocksContext';
import { BlockProvider } from '../contexts/blockContext';
import { ThemeProvider } from '../contexts/themeContext';

const App = () => (
  <ThemeProvider>
    <NetworkProvider>
      <BlocksProvider>
        <BlockProvider>
          <Router>
            <Header />
            <AppRouter />
            <Footer />
          </Router>
        </BlockProvider>
      </BlocksProvider>
    </NetworkProvider>
  </ThemeProvider>
);

export default App;
