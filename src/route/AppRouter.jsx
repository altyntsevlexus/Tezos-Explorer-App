import { Route, Switch, Redirect } from 'react-router-dom';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import Blocks from '../pages/blocks';
import Block from '../pages/block';
import Error404 from '../pages/Error404';

const ROUTE_CONFIG = [
  { path: '/blocks', component: Blocks, exact: true },
  { path: '/blocks/:id', component: Block, exact: true },
  { path: '/404', component: Error404 },
];

const AppRouter = () => (
  <main className="wrapper">
    <Breadcrumbs />
    <Switch>
      <Route exact path="/">
        <Redirect to="/blocks" />
      </Route>
      {ROUTE_CONFIG.map((route, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={i} path={route.path} exact={route.exact || false}>
          <route.component />
        </Route>
      ))}
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  </main>
);

export default AppRouter;
