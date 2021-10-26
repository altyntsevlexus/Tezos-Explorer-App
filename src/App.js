import './styles/index.scss';

import Button from './components/shared/Button';
import Logo from './components/shared/Logo';
import Title from './components/shared/Title';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

import AppRouter from './route/AppRouter.jsx';

import { NetworkProvider } from './context/networkContext.jsx';
import { BlocksProvider } from './context/blocksContext.jsx';

const App = () => (
  <>
    <Button />
    <Logo />
    <Title />
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
