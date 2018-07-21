import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { history } from 'redux/history';
import { store } from 'redux/store';
import { Home } from 'routes';
import 'semantic-ui-css/semantic.min.css';
import 'styles/global';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <StrictMode><Home/></StrictMode>}/>
    <Redirect path="*" to="/"/>
  </Switch>
);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>
);

render(<Root/>, document.getElementById('react-root'));
