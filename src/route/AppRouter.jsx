import { Route, Switch, Redirect } from 'react-router-dom';

import Blocks from '../pages/blocks';
import Block from '../pages/block';
import Error404 from '../pages/Error404';
import Breadcrumbs from '../components/shared/Breadcrumbs/Breadcrumbs';

const ROUTE_CONFIG = [
  { path: '/blocks', component: Blocks, exact: true },
  { path: '/blocks/:id', component: Block, exact: true },
  { path: '*', component: Error404 },
];

const AppRouter = () => (
  <main className="wrapper">
    <Breadcrumbs />
    <Switch>
      <Route exact path="/">
        <Redirect to="/blocks" />
      </Route>
      {ROUTE_CONFIG.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact || false}>
          <route.component />
        </Route>
      ))}
    </Switch>
  </main>
);

export default AppRouter;
