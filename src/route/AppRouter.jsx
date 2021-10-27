import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

import Blocks from '../pages/blocks';
import Block from '../pages/block';

const ROUTE_CONFIG = [
  { path: '/blocks', component: Blocks, exact: true },
  { path: '/blocks/:id', component: Block, exact: true },
];

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      {ROUTE_CONFIG.map((route, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={i} path={route.path} exact={route.exact || false}>
          <route.component />
        </Route>
      ))}
    </Switch>
    <Footer />
  </Router>
);

export default AppRouter;
