import { Route, Switch, Redirect } from 'react-router-dom';

import Blocks from '../pages/blocks';
import Block from '../pages/block';

const ROUTE_CONFIG = [
  { path: '/blocks', component: Blocks, exact: true },
  { path: '/blocks/:id', component: Block, exact: true },
];

const AppRouter = () => (
  <main className="wrapper">
    <Switch>
      {ROUTE_CONFIG.map((route, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={i} path={route.path} exact={route.exact || false}>
          <route.component />
        </Route>
      ))}
      <Route exact path={['/', '/home']}>
        <Redirect to="/blocks" />
      </Route>
    </Switch>
  </main>
);

export default AppRouter;
