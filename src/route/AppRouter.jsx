import { Route, Switch, Redirect } from 'react-router-dom';
import Blocks from '../pages/blocks';
import Block from '../pages/block';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const ROUTE_CONFIG = [
  { path: '/blocks', component: Blocks, exact: true },
  { path: '/blocks/:id', component: Block, exact: true },
  { path: '/404', component: Error404 },
  { path: '/login', component: Login },
  { path: '/sign-up', component: SignUp },
];

const AppRouter = () => (
  <main className="wrapper">
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
