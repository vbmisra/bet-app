import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './utils/store';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
// import PickForm from './pages/PickForm';
import Page1 from './components/Form/page1';
// import Picks from './components/Form/picks';
import Modal from './components/Form/page2';
import classy from './components/Form/page3';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/page1" component={Page1} />
              <Route exact path="/page2" component={Modal} />
              <Route exact path="/page3" component={classy} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
              <Route component={Modal} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
