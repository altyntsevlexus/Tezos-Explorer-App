import './styles/index.scss';

import Button from './components/shared/Button';
import Logo from './components/shared/Logo';
import Contact from './components/shared/Contact';
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
    <Contact />
    <Title />
    <Header />
    <Footer />
    <NetworkProvider>
      <BlocksProvider>
        <AppRouter />
      </BlocksProvider>
    </NetworkProvider>
  </>
);

export default App;
